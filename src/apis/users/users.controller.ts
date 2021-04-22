import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/users.entity';
import { UserService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
@Controller('users')
export class UsersController {
  constructor(private readonly _userService: UserService) { }

  @Get(':id') // users/1
  async findOne(@Param('id') id: number): Promise<User> {
    const user: User = await this._userService.findOne(id);
    return user;
  }

  @Get() // users/
  async findAll(): Promise<User[]> {
    return await this._userService.findAll();
  }

  @Post() // users
  async create(@Body() user: CreateUserDto): Promise<User> {
    return this._userService.create(user);
  }

  @Patch(':id')
  async upadate(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<User> {
    return this._userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<boolean> {
    return this._userService.remove(+id);
  }
}
