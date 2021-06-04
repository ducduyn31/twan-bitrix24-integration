import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {BitrixModule} from './bitrix/bitrix.module';
import {CqrsModule} from '@nestjs/cqrs';
import {CommandHandlers} from './handlers';
import {ClientsModule, Transport} from '@nestjs/microservices';
import {KAFKA_BROKER, KAFKA_CLIENT_ID} from './config';

@Module({
    imports: [BitrixModule, CqrsModule, ClientsModule.register([
        {
            name: 'KAFKA_SERVICE',
            transport: Transport.KAFKA,
            options: {
                client: {
                    clientId: KAFKA_CLIENT_ID,
                    brokers: [KAFKA_BROKER]
                },
                consumer: {
                    groupId: 'user-factory',
                    allowAutoTopicCreation: true,
                }
            }
        }
    ])],
    controllers: [AppController],
    providers: [...CommandHandlers],
})
export class AppModule {
}
