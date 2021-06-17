import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {ValidationPipe} from '@nestjs/common';
import {EtcdService} from 'nestjs-etcd3';
import {Config} from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const etcdService = app.get(EtcdService);
  Object.keys(Config).forEach(key => etcdService.watch(key).subscribe(value => Config[key] = value));

  app.useGlobalPipes(new ValidationPipe());

  await app.startAllMicroservicesAsync();
  await app.listen(3000);
}
bootstrap();
