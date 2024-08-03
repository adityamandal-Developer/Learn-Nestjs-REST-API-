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

@Controller('users')
export class UsersController {
  @Get() // /users?role=value
  findAll(@Query('role') role?: 'INTREN' | 'ADMIN') {
    return { users: [], role };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Post()
  create(@Body() user: object) {
    return user;
  }

  @Patch(':id')
  findOneAndUpdate(@Param('id') id: string, @Body() userUpdate: object) {
    return { id, ...userUpdate };
  }

  @Delete(':id')
  findOneAndDelete(@Param('id') id: string) {
    const message: string = 'deleted successfully';
    return { id, message };
  }
}
