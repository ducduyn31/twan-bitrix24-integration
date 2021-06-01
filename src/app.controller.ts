import {Body, Controller, Post} from '@nestjs/common';
import {AppService} from './app.service';
import {WebHookEvent, WebhookRequest} from './dto/webhook.request';
import {plainToClass} from 'class-transformer';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Post()
    public test() {
        return 'ok';
    }

    @Post('company')
    public onCompanyCreated(@Body() req: WebhookRequest): void {
        console.log(req)
        const data = plainToClass(WebhookRequest, req);
        if (data.event !== WebHookEvent.COMPANY_CREATED && data.event !== WebHookEvent.COMPANY_UPDATED) return;

    }

    @Post('deal')
    public onDealUpdated(@Body() req: WebhookRequest): void {
        console.log(req);
        const data = plainToClass(WebhookRequest, req);
        if (data.event !== WebHookEvent.DEAL_CREATED && data.event !== WebHookEvent.DEAL_UPDATED) return;
        console.log(data.id);
    }
}
