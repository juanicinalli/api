import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './schemas/user.schema';
import { ClientProxy } from '@nestjs/microservices';
import { GetUsersDto } from './dto/get-users.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    @Inject('BUSINESS_SERVICE') private client: ClientProxy,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const createdUser = new this.userModel(createUserDto);
    return await createdUser.save();
  }

  async findOneByEmail(email: string) {
    return await this.userModel.findOne({ email }).exec();
  }

  async getUsersFromBusiness(query: GetUsersDto, headers: any) {
    return new Promise((resolve, reject) => {
      // Send a message to the business service using the client
      this.client.send({ cmd: 'getUsers' }, { query, headers }).subscribe({
        // Handle the response from the business service
        next: (users: User[]) => {
          // Resolve the promise with the retrieved users
          resolve(users);
        },
        // Handle any errors that occur during the request
        error: (error: Error) => {
          // Reject the promise with the error
          reject(error);
        },
      });
    });
  }
}
