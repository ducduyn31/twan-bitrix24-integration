import {Body, Controller, Post} from '@nestjs/common';
import {WebHookEvent, WebhookRequest} from './dto/webhook.request';
import {plainToClass} from 'class-transformer';
import {BitrixService} from './bitrix/bitrix.service';

@Controller('callback')
export class AppController {
    constructor(private readonly bitrixService: BitrixService) {
    }

    @Post('company')
    public async onCompanyCreated(@Body() req: WebhookRequest): Promise<void> {
        const data = plainToClass(WebhookRequest, req);
        if (data.event !== WebHookEvent.COMPANY_CREATED && data.event !== WebHookEvent.COMPANY_UPDATED) return;
        await this.bitrixService.getCompany(data.id);
    }

    @Post('deal')
    public onDealUpdated(@Body() req: WebhookRequest): void {
        const data = plainToClass(WebhookRequest, req);
        if (data.event !== WebHookEvent.DEAL_CREATED && data.event !== WebHookEvent.DEAL_UPDATED) return;
        this.bitrixService.getDeal(data.id).subscribe(res => console.log(res));
    }
}
