import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'apps/login/src/user/schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class BusinessService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async findAll(page: number = 1, limit: number = 10, email: string = '') {
    const users = await this.userModel
      .find({ email: { $regex: new RegExp(email, 'i') } })
      .skip((page - 1) * limit)
      .select('_id email')
      .limit(limit);

    return users;
  }
}
