import {HttpModule, Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {BitrixModule} from './bitrix/bitrix.module';
import {CqrsModule} from '@nestjs/cqrs';
import {CommandHandlers} from './handlers';
import {ClientsModule, Transport} from '@nestjs/microservices';
import {Config} from './config';
import {EtcdModule} from 'nestjs-etcd3';
import {join} from 'path';

const {KAFKA_BROKER, BITRIX_SERVER_KAFKA_CLIENT_ID: KAFKA_CLIENT_ID} = Config

@Module({
    imports: [BitrixModule, CqrsModule, HttpModule, ClientsModule.register([
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
        },
        {
            name: 'ORAY_PACKAGE',
            transport: Transport.GRPC,
            options: {
                package: 'oray',
                protoPath: join(__dirname, 'proto/oray.proto'),
            }
        }
    ]), EtcdModule.root({
        hosts: 'http://etcd:2379',
    })],
    controllers: [AppController],
    providers: [...CommandHandlers],
})
export class AppModule {
}
