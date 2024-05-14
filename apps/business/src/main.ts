import { NestFactory } from '@nestjs/core';
import {
  MicroserviceOptions,
  RpcException,
  Transport,
} from '@nestjs/microservices';
import { BusinessModule } from './business.module';
import { ValidationPipe } from '@nestjs/common';
import configuration from 'config/configuration';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    BusinessModule,
    {
      transport: Transport.TCP,
      options: {
        host: configuration.transportHost,
        port: configuration.transportPort,
      },
    },
  );
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      disableErrorMessages: true,
      exceptionFactory: (errors) => {
        return new RpcException(errors);
      },
    }),
  );
  await app.listen();
}
bootstrap();
