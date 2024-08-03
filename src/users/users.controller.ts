import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService, User, UpdatedUser } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get() // /users?role=value
  findAll(@Query('role') role?: 'INTERN' | 'ADMIN') {
    return this.usersService.findAll(role);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(Number(id));
  }

  @Post()
  create(@Body() user: User) {
    return this.usersService.create(user);
  }

  @Patch(':id')
  findOneAndUpdate(@Param('id') id: string, @Body() userUpdate: UpdatedUser) {
    return this.usersService.update(Number(id), userUpdate);
  }

  @Delete(':id')
  findOneAndDelete(@Param('id') id: string) {
    return this.usersService.delete(Number(id));
  }
}
