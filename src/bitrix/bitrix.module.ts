import {HttpModule, Module} from '@nestjs/common';
import {BitrixService} from './bitrix.service';

@Module({
    imports: [HttpModule],
    providers: [BitrixService],
    exports: [BitrixService],
})
export class BitrixModule {}
