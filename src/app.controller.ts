import {Body, Controller, Post} from '@nestjs/common';
import {WebHookEvent, WebhookRequest} from './dto/webhook.request';
import {plainToClass} from 'class-transformer';
import {BitrixService} from './bitrix/bitrix.service';
import {STAGE} from './bitrix/interfaces/deal.interface';
import {CommandBus} from '@nestjs/cqrs';
import {CreateUserCommand} from './commands/create-user.command';
import {CreateNetworkCommand} from './commands/create-network.command';

@Controller('callback')
export class AppController {
    constructor(
        private readonly bitrixService: BitrixService,
        private readonly commandBus: CommandBus
    ) {
    }

    @Post('deal')
    public onDealUpdated(@Body() req: WebhookRequest): void {
        const data = plainToClass(WebhookRequest, req);
        if (data.event !== WebHookEvent.DEAL_CREATED && data.event !== WebHookEvent.DEAL_UPDATED) {
            return;
        }
        this.bitrixService.getDeal(data.id).subscribe(deal => {
            // if (deal.stage !== STAGE.WON) {
            //     return;
            // }
            //
            // this.commandBus.execute(new CreateUserCommand(deal));
            // this.commandBus.execute(new CreateNetworkCommand(deal));
        })
    }
}
