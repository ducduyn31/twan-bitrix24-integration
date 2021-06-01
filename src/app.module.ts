import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BitrixModule } from './bitrix/bitrix.module';

@Module({
  imports: [BitrixModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
