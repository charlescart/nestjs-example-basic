import { Module } from '@nestjs/common';
import { ConfigModule } from './apis/config/config.module';
import { DatabaseModule } from './apis/database/database.module';
import { UsersModule } from './apis/users/users.module';
import { HelloModule } from './apis/hello/hello.module';
import { ConfigService } from './apis/config/config.service';
import { Configuration } from './apis/config/config.key';

@Module({
  imports: [ConfigModule, UsersModule, DatabaseModule, HelloModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  static port: number | string;
  static prefix: string;

  constructor(private readonly _ConfigService: ConfigService) {
    AppModule.port = this._ConfigService.get(Configuration.PORT);
    AppModule.prefix = this._ConfigService.get(Configuration.PREFIX)
  }
}
