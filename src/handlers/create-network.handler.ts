import {CreateNetworkCommand} from '../commands/create-network.command';
import {CommandHandler, ICommandHandler} from '@nestjs/cqrs';
import {HttpService, Inject, OnModuleInit} from '@nestjs/common';
import {BitrixService} from '../bitrix/bitrix.service';
import {OrayService} from '../dto/oray-service.interface';
import {ClientGrpc} from '@nestjs/microservices';

@CommandHandler(CreateNetworkCommand)
export class CreateNetworkHandler implements ICommandHandler<CreateNetworkCommand>, OnModuleInit {

    private orayService: OrayService;

    constructor(
        @Inject('ORAY_PACKAGE') private readonly grpcClient: ClientGrpc,
        private readonly http: HttpService,
        private readonly bitrix: BitrixService,
    ) {
    }

    async execute(command: CreateNetworkCommand): Promise<any> {
        // return await this.http.post('product/network/create', {
        //     name: 'Default',
        //     type: 0,
        //     networkid: null,
        // }, {
        //     baseURL: 'https://pgy-api.oray.com/'
        // }).toPromise();
        return this.orayService.createNetwork({
            name: 'Default',
            type: 0,
        }).toPromise();
    }

    onModuleInit(): any {
        this.orayService = this.grpcClient.getService<OrayService>('OrayNetworkService');
    }
}
