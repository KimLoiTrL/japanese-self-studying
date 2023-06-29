import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { User } from '../auth/schemas/user.schema';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService:UsersService){}

    @Get()
    async getAll(): Promise<User[]>{
        return this.userService.getAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return await this.userService.findOne(id);
    }

    @Post()
    async createUser(@Body() users: User){
      return this.userService.createUser(users);
    }

    @Put('/:id')
    async updateUser(@Param('id') id:string, @Body() users: User){
      return await this.userService.updateUser(id, users);
    }

    @Delete('/:id')
    async deleteUser(@Param('id') id:string){
      await this.userService.deleteUser(id);
    }
}
