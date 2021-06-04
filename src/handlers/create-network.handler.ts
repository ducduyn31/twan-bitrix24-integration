import {CreateNetworkCommand} from '../commands/create-network.command';
import {CommandHandler, ICommandHandler} from '@nestjs/cqrs';

@CommandHandler(CreateNetworkCommand)
export class CreateNetworkHandler implements ICommandHandler<CreateNetworkCommand> {
    async execute(command: CreateNetworkCommand): Promise<any> {
        return Promise.resolve(undefined);
    }
}
