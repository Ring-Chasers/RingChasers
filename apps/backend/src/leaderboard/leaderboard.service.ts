import { Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class LeaderboardService {
  findFriendLeaderboard(page: number, count: number) {
    // This is a placeholder implementation. Replace with actual logic to fetch global leaderboard data.
    if (isNaN(page) || isNaN(count) || page <= 0 || count <= 0) {
      throw new BadRequestException(
        'Page and count must be numbers and greater than 0',
      );
    }
    return {
      page,
      count,
      leaderboard: [
        {
          name: 'John Doe',
          points: 100,
          wins: 10,
        },
        {
          name: 'Jane Doe',
          points: 200,
          wins: 20,
        },
      ],
    };
  }

  findGlobalLeaderboard(page: number, count: number) {
    // This is a placeholder implementation. Replace with actual logic to fetch global leaderboard data.
    if (isNaN(page) || isNaN(count) || page <= 0 || count <= 0) {
      throw new BadRequestException(
        'Page and count must be numbers and greater than 0',
      );
    }
    return {
      page,
      count,
      leaderboard: [
        {
          name: 'John Doe',
          points: 100,
          wins: 10,
        },
        {
          name: 'Jane Doe',
          points: 200,
          wins: 20,
        },
      ],
    };
  }
}
