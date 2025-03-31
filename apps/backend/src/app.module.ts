import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'frontend', 'dist'),
    }),
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
  }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
