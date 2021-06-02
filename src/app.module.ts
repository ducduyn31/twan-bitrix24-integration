import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { BitrixModule } from './bitrix/bitrix.module';

@Module({
  imports: [BitrixModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
