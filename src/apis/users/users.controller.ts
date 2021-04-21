import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get() // users
  getUsers() {
    return 'users';
  }

  @Get('set-password') // users/set-password
  setPassword() {
    return 'set password';
  }
}
