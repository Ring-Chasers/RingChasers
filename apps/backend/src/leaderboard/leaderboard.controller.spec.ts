import { Test, TestingModule } from '@nestjs/testing';
import { BadRequestException } from '@nestjs/common';
import { LeaderboardController } from './leaderboard.controller';
import { LeaderboardService } from './leaderboard.service';
import { Firebase } from '../utils/firebaseClient.setup';
import { FirebaseAdmin } from '../utils/firebase.setup';

describe('LeaderboardController', () => {
  let controller: LeaderboardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LeaderboardController],
      providers: [LeaderboardService, FirebaseAdmin, Firebase],
    }).compile();

    controller = module.get<LeaderboardController>(LeaderboardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should get back friend leaderboard data', () => {
    expect(
      controller.findGlobalLeaderboard(1, 10).leaderboard.length,
    ).toBeLessThanOrEqual(10);
    expect(
      controller.findFriendLeaderboard(1, 10).leaderboard.length,
    ).toBeLessThanOrEqual(10);
  });

  it('should throw bad request exception for invalid page or count', () => {
    expect(() => controller.findGlobalLeaderboard(-1, 10)).toThrow(
      BadRequestException,
    );
    expect(() => controller.findFriendLeaderboard(1, -10)).toThrow(
      BadRequestException,
    );
    expect(() => controller.findGlobalLeaderboard(0, 0)).toThrow(
      BadRequestException,
    );
    expect(() => controller.findFriendLeaderboard(0, 0)).toThrow(
      BadRequestException,
    );
    expect(() => controller.findGlobalLeaderboard(0, 10)).toThrow(
      BadRequestException,
    );
    expect(() => controller.findFriendLeaderboard(1, 0)).toThrow(
      BadRequestException,
    );
    expect(() => controller.findGlobalLeaderboard(1, 0)).toThrow(
      BadRequestException,
    );
    expect(() => controller.findFriendLeaderboard(0, 10)).toThrow(
      BadRequestException,
    );
  });

});
