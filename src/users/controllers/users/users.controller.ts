import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from '../dtos/CreateUser.dto';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return {
      message: 'Users fetched successfully',
      data: [
        {
          id: 1,
          name: 'Khav Saroeun',
          email: 'khavsaroeun@gmail.com',
        },
      ],
    };
  }

  @Get(':id')
  getUser(@Param('id') id: string) {
    return {
      message: 'User fetched successfully',
      data: { id: id },
    };
  }

  @Post()
  createUser(@Body() body: CreateUserDto) {
    console.log(body);
    return {
      message: 'User created successfully!',
      data: body,
    };
  }
}
