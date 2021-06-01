import {Module} from '@nestjs/common';
import BitrixAPI from '@2bad/bitrix';
import {BITRIX_REST_ENDPOINT} from '../config';

@Module({
    providers: [{
        provide: 'Bitrix',
        useValue: BitrixAPI(BITRIX_REST_ENDPOINT),
    }],
})
export class BitrixModule {}
