import { Controller, Get } from '@nestjs/common';

@Controller()
export class HelloController {
  @Get() // localhost:[PORT]
  welcome() {
    return 'Welcome, api flow running!';
  }

  @Get('ping') // localhost:[PORT]/ping
  ping() {
    return 'pong';
  }

  @Get('now')
  now() {
    return Date.now();
  }
}
