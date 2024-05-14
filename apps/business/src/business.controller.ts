import {
  Controller,
  HttpException,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { BusinessService } from './business.service';
import { MessagePattern } from '@nestjs/microservices';
import { UserGuard } from 'apps/login/src/auth/guard/auth.guard';
import { GetUsersDto } from './dto/get-users.dto';

@Controller()
export class BusinessController {
  constructor(private readonly businessService: BusinessService) {}

  // Patrón de mensaje para obtener usuarios
  @MessagePattern({ cmd: 'getUsers' })
  @UseGuards(UserGuard)
  async getUsers(getUsersDto: GetUsersDto) {
    try {
      const { page, limit, email } = getUsersDto.query;

      // Paginado
      const parsedPage = parseInt(page, 10);
      const parsedLimit = parseInt(limit, 10);

      return await this.businessService.findAll(parsedPage, parsedLimit, email);
    } catch (error) {
      console.log(error);

      throw new HttpException(
        error.message,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
