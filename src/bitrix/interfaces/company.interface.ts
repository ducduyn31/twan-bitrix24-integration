import {Exclude, Expose} from 'class-transformer';
import {tsTsxJsJsxRegex} from 'ts-loader/dist/constants';

export class Company {

    @Exclude({ toPlainOnly: true })
    ID: string;

    @Exclude({ toPlainOnly: true })
    COMPANY_TYPE: string;

    @Exclude({ toPlainOnly: true })
    TITLE: string;

    @Exclude({ toPlainOnly: true })
    LOGO: string;

    @Exclude({ toPlainOnly: true })
    LEAD_ID: string;

    @Exclude({ toPlainOnly: true })
    HAS_PHONE: 'Y' | 'N';

    @Exclude({ toPlainOnly: true })
    HAS_EMAIL: 'Y' | 'N';

    @Exclude({ toPlainOnly: true })
    HAS_IMOL: 'Y' | 'N';

    @Exclude({ toPlainOnly: true })
    ASSIGNED_BY_ID: string;

    @Exclude({ toPlainOnly: true })
    CREATED_BY_ID: string;

    @Exclude({ toPlainOnly: true })
    MODIFY_BY_ID: string;

    @Exclude({ toPlainOnly: true })
    BANKING_DETAILS: string;

    @Exclude({ toPlainOnly: true })
    INDUSTRY: string;

    @Exclude({ toPlainOnly: true })
    REVENUE: string;

    @Exclude({ toPlainOnly: true })
    CURRENCY_ID: string;

    @Exclude({ toPlainOnly: true })
    EMPLOYEES: string;

    @Exclude({ toPlainOnly: true })
    COMMENTS: string;

    @Exclude({ toPlainOnly: true })
    DATE_CREATE: Date;

    @Exclude({ toPlainOnly: true })
    DATE_MODIFY: Date;

    @Exclude({ toPlainOnly: true })
    OPENED: 'Y' | 'N';

    @Exclude({ toPlainOnly: true })
    IS_MY_COMPANY: 'Y' | 'N';

    @Exclude({ toPlainOnly: true })
    ORIGINATOR_ID: string;

    @Exclude({ toPlainOnly: true })
    ORIGIN_ID: string;

    @Exclude({ toPlainOnly: true })
    ORIGIN_VERSION: string;

    @Exclude({ toPlainOnly: true })
    ADDRESS: string;

    @Exclude({ toPlainOnly: true })
    UF_CRM_1622202552007: string;

    @Exclude({ toPlainOnly: true })
    UF_CRM_1622202651767: string[];

    @Expose()
    get id() {
        return this.UF_CRM_1622202552007;
    }

}
