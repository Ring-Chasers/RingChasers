import { Controller, Get, Param } from '@nestjs/common';
import { LeaderboardService } from './leaderboard.service';
import { Auth } from '../decorators/auth.decorator';

@Controller('leaderboard')
export class LeaderboardController {
  constructor(private readonly leaderboardService: LeaderboardService) {}

  @Get('global')
  @Auth('USER')
  findGlobalLeaderboard(
    @Param('page') page: number,
    @Param('count') count: number,
  ) {
    return this.leaderboardService.findGlobalLeaderboard(page, count);
  }

  @Get('friend')
  @Auth('USER')
  findFriendLeaderboard(
    @Param('page') page: number,
    @Param('count') count: number,
  ) {
    return this.leaderboardService.findFriendLeaderboard(page, count);
  }
}
