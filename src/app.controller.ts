import {Body, Controller, Post} from '@nestjs/common';
import {AppService} from './app.service';
import {WebHookEvent, WebhookRequest} from './dto/webhook.request';
import {plainToClass} from 'class-transformer';

@Controller('callback')
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Post('company')
    public onCompanyCreated(@Body() req: WebhookRequest): void {
        const data = plainToClass(WebhookRequest, req);
        if (data.event !== WebHookEvent.COMPANY_CREATED && data.event !== WebHookEvent.COMPANY_UPDATED) return;


    }

    @Post('deal')
    public onDealUpdated(@Body() req: WebhookRequest): void {
        const data = plainToClass(WebhookRequest, req);
        if (data.event !== WebHookEvent.DEAL_CREATED && data.event !== WebHookEvent.DEAL_UPDATED) return;

    }
}
