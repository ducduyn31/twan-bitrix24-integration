import {CreateNetworkCommand} from '../commands/create-network.command';
import {CommandHandler, ICommandHandler} from '@nestjs/cqrs';
import {HttpService} from '@nestjs/common';
import {BitrixService} from '../bitrix/bitrix.service';

@CommandHandler(CreateNetworkCommand)
export class CreateNetworkHandler implements ICommandHandler<CreateNetworkCommand> {

    constructor(private readonly http: HttpService, private readonly bitrix: BitrixService) {
    }

    async execute(command: CreateNetworkCommand): Promise<any> {
        return await this.http.post('product/network/create', {
            name: 'Default',
            type: 0,
            networkid: null,
        }, {
            baseURL: 'https://pgy-api.oray.com/'
        }).toPromise();
    }
}
