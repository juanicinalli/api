import { Module } from '@nestjs/common';
import { BusinessController } from './business.controller';
import { BusinessService } from './business.service';
import { MongooseModule } from '@nestjs/mongoose';
import configuration from 'config/configuration';
import { JwtModule } from '@nestjs/jwt';
import { User, UserSchema } from 'apps/login/src/user/schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forRoot(`${configuration.dbHost}${configuration.dbName}`),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    JwtModule.register({
      global: true,
      secret: configuration.jwtSecret,
      signOptions: { expiresIn: '10m' },
    }),
  ],
  controllers: [BusinessController],
  providers: [BusinessService],
})
export class BusinessModule {}
