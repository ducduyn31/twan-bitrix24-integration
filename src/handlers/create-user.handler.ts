import {CommandHandler, ICommandHandler} from '@nestjs/cqrs';
import {CreateUserCommand} from '../commands/create-user.command';
import {Inject, OnModuleDestroy, OnModuleInit} from '@nestjs/common';
import {ClientKafka} from '@nestjs/microservices';
import {BitrixService} from '../bitrix/bitrix.service';
import {Config} from '../config';
import {CreateUserInterface} from '../dto/create-user.interface';
import {map} from 'rxjs/operators';
import {generate} from 'generate-password';

const {KAFKA_CREATE_USER_TOPIC} = Config;

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand>, OnModuleDestroy, OnModuleInit {

    constructor(
        @Inject('KAFKA_SERVICE') private readonly kafka: ClientKafka,
        private readonly bitrix: BitrixService
    ) {
    }

    async execute(command: CreateUserCommand): Promise<any> {
        const [company, accounts] = await Promise.all([
            this.bitrix.getCompany(command.fromDeal.companyId).toPromise(),
            this.bitrix.getProducts(command.fromDeal.id).pipe(
                map(products => products.filter(product => !!product.account).map(product => product.account))
            ).toPromise(),
        ]);

        const messages = accounts.map((account) => this.kafka.send(KAFKA_CREATE_USER_TOPIC, {
            userId: company.id,
            username: account,
            password: generate({length: 12, uppercase: true}),
        } as CreateUserInterface).toPromise());

        return Promise.all(messages);
    }

    async onModuleDestroy(): Promise<void> {
        await this.kafka.close();
    }

    onModuleInit(): any {
        this.kafka.subscribeToResponseOf(KAFKA_CREATE_USER_TOPIC);
    }
}
