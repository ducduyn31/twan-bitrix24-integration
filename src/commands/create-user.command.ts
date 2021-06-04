import {Deal} from '../bitrix/interfaces/deal.interface';

export class CreateUserCommand {
    constructor(
        public readonly fromDeal: Deal,
        public readonly options?: any,
    ) {
    }
}
