import { Module } from '@nestjs/common';
import { LeaderboardService } from './leaderboard.service';
import { LeaderboardController } from './leaderboard.controller';
import { Firebase } from 'src/utils/firebaseClient.setup';
import { FirebaseAdmin } from 'src/utils/firebase.setup';

@Module({
  controllers: [LeaderboardController],
  providers: [LeaderboardService, FirebaseAdmin, Firebase],
})
export class LeaderboardModule {}
