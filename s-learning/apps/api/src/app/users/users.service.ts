import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument, User } from '../auth/schemas/user.schema';

@Injectable()
export class UsersService {

  constructor(
    @InjectModel(User.name)
      private userModel: Model<UserDocument>
  ){}

  async getAll():Promise<User[]>{
    return this.userModel.find().exec();
  }

  async findOne(id: string): Promise<User> {
    return await this.userModel.findById(id).exec();
  }

  async createUser(users : User){
    const newUser = new this.userModel(users);
    return newUser.save();
  }

  async updateUser(id: string, users: User){
    return await this.userModel.findByIdAndUpdate(id, users, {new: true});
  }

  async deleteUser(id:string) {
    await this.userModel.findByIdAndRemove(id);
  }
}
