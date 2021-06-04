import {Deal} from '../bitrix/interfaces/deal.interface';

export class CreateNetworkCommand {
    constructor(
        public readonly fromDeal: Deal,
        public readonly options?: any,
    ) {
    }
}
