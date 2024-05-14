import {
  Controller,
  Get,
  HttpStatus,
  HttpException,
  UseGuards,
  Query,
  Request,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserGuard } from '../auth/guard/auth.guard';
import { GetUsersDto } from './dto/get-users.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(UserGuard)
  @Get()
  async getUsers(@Request() req, @Query() getUsersDto: GetUsersDto) {
    try {
      // Extract the token from the request object and create the headers object
      const headers = { authorization: `Bearer ${req.token}` };

      return await this.userService.getUsersFromBusiness(getUsersDto, headers);
    } catch (error) {
      console.log(error);
      throw new HttpException(
        error.message,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
