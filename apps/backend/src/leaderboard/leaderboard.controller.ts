import { Controller, Get, Query } from '@nestjs/common';
import { LeaderboardService } from './leaderboard.service';
import { Auth } from '../decorators/auth.decorator';

@Controller('leaderboard')
export class LeaderboardController {
  constructor(private readonly leaderboardService: LeaderboardService) {}

  @Get('global')
  @Auth('USER')
  findGlobalLeaderboard(
    @Query('page') page: number,
    @Query('count') count: number,
  ) {
    return this.leaderboardService.findGlobalLeaderboard(
      Number(page),
      Number(count),
    );
  }

  @Get('friend')
  @Auth('USER')
  findFriendLeaderboard(
    @Query('page') page: number,
    @Query('count') count: number,
  ) {
    return this.leaderboardService.findFriendLeaderboard(
      Number(page),
      Number(count),
    );
  }
}
