import { Module } from '@nestjs/common';
import { LeaderboardService } from './leaderboard.service';
import { LeaderboardController } from './leaderboard.controller';
import { Firebase } from 'firebaseClient.setup';
import { FirebaseAdmin } from 'firebase.setup';

@Module({
  controllers: [LeaderboardController],
  providers: [LeaderboardService, FirebaseAdmin, Firebase],
})
export class LeaderboardModule {}
