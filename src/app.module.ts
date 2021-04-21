import { Module } from '@nestjs/common';
import { UsersModule } from './apis/users/users.module';
import { HelloModule } from './apis/hello/hello.module';

@Module({
  imports: [UsersModule, HelloModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
