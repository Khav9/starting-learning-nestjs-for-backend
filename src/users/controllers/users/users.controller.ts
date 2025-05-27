import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from '../dtos/CreateUser.dto';
import { UsersService } from '../../services/users/users.service';
import { AuthGuard } from 'src/users/guards/auth/auth.guard';

@Controller('users')
export class UsersController {
  // service
  constructor(private readonly usersService: UsersService) {}

  // use get
  @Get()
  @UseGuards(AuthGuard)
  getUsers() {
    return this.usersService.fetchUsers();
  }

  // use query
  @Get('/me')
  getUserQuery(@Query('sortby') sortby: string) {
    return {
      message: 'User fetched successfully',
      data: { sortby: sortby },
    };
  }

  // use param + validation pipe
  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number) {
    const user = this.usersService.fetchUserById(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  // use body + validation pipe
  @Post()
  @UsePipes(new ValidationPipe())
  createUser(@Body() body: CreateUserDto) {
    return this.usersService.createUser(body);
  }
}
