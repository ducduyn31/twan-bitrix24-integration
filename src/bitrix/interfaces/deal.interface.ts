import {Exclude, Expose} from 'class-transformer';
import {IsEnum} from 'class-validator';

export enum STAGE {
    NEW = 'NEW',
    PAPER = 'PREPARATION',
    INVOICE = 'PREPAYMENT_INVOICE',
    IN_PROGRESS = 'EXECUTING',
    FINAL_INVOICE = 'FINAL_INVOICE',
    WON = 'WON',
    LOST = 'LOST',
}

export class Deal {
    @Exclude({ toPlainOnly: true })
    ID: string;

    @Exclude({ toPlainOnly: true })
    TITLE: string;

    @Exclude({ toPlainOnly: true })
    TYPE_ID: string;

    @Exclude({ toPlainOnly: true })
    @IsEnum(STAGE)
    STAGE_ID: STAGE;

    @Exclude({ toPlainOnly: true })
    PROBABILITY: number;

    @Exclude({ toPlainOnly: true })
    CURRENCY_ID: string;

    @Exclude({ toPlainOnly: true })
    OPPORTUNITY: number;

    @Exclude({ toPlainOnly: true })
    LEAD_ID: string;

    @Exclude({ toPlainOnly: true })
    COMPANY_ID: string;

    @Exclude({ toPlainOnly: true })
    CONTACT_ID: string;

    @Exclude({ toPlainOnly: true })
    QUOTE_ID: string;

    @Exclude({ toPlainOnly: true })
    BEGINDATE: Date;

    @Exclude({ toPlainOnly: true })
    CLOSEDATE: Date;

    @Exclude({ toPlainOnly: true })
    ASSIGNED_BY_ID: string;

    @Exclude({ toPlainOnly: true })
    CREATED_BY_ID: string;

    @Exclude({ toPlainOnly: true })
    MODIFY_BY_ID: string;

    @Exclude({ toPlainOnly: true })
    DATE_CREATE: Date;

    @Exclude({ toPlainOnly: true })
    DATE_MODIFY: Date;

    @Exclude({ toPlainOnly: true })
    OPENED: 'Y' | 'N';

    @Exclude({ toPlainOnly: true })
    CLOSED: 'Y' | 'N';

    @Exclude({ toPlainOnly: true })
    COMMENTS: string;

    @Exclude({ toPlainOnly: true })
    ADDITIONAL_INFO: string;

    @Exclude({ toPlainOnly: true })
    LOCATION_ID: string;

    @Exclude({ toPlainOnly: true })
    CATEGORY_ID: string;

    @Exclude({ toPlainOnly: true })
    STAGE_SEMANTIC_ID: string;

    @Exclude({ toPlainOnly: true })
    IS_NEW: 'Y' | 'N';

    @Expose()
    get id() {
        return this.ID;
    }

    @Expose()
    get name() {
        return this.TITLE;
    }

    @Expose()
    get stage() {
        return this.STAGE_ID;
    }

    @Expose()
    get companyId() {
        return this.COMPANY_ID;
    }
}
