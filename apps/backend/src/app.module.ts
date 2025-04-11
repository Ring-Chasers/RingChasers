import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { FirebaseAdmin } from '../firebase.setup';
import { Firebase } from '../firebaseClient.setup';
import { LeaderboardModule } from './leaderboard/leaderboard.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../..', 'frontend', 'dist'),
    }),
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    LeaderboardModule,
  ],
  controllers: [AppController],
  providers: [AppService, FirebaseAdmin, Firebase],
})
export class AppModule {}
