import {IsEnum} from 'class-validator';
import {Exclude, Expose} from 'class-transformer';

export enum WebHookEvent {
    COMPANY_CREATED = 'ONCRMCOMPANYCREATED',
    COMPANY_UPDATED = 'ONCRMCOMPANYUPDATE',
    DEAL_UPDATED = 'ONCRMDEALUPDATE',
    DEAL_CREATED = 'ONCRMDEALADD',
}

export class WebhookRequest {
    @IsEnum(WebHookEvent)
    event: WebHookEvent;

    @Exclude({toPlainOnly: true})
    data: {
        FIELDS: {
            ID: string;
        }
    };
    ts: string;

    @Exclude({toPlainOnly: true})
    auth: {
        domain: string;
        client_endpoint: string;
        server_endpoint: string;
        member_id: string;
        application_token: string;
    };

    @Expose()
    get id(): string {
        return this.data.FIELDS.ID;
    }

    @Expose()
    get token(): string {
        return this.auth.application_token;
    }
}
