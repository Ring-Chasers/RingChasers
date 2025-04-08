import { Controller, Post, Body, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { LoginDTO } from './dto/login.dto';
import { Response } from 'express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/signup')
  signup(@Body() userRequest: UserDto) {
    return this.userService.createUser(userRequest);
  }

  @Post('/login')
  login(
    @Body() userRequest: LoginDTO,
    @Res({ passthrough: true }) response: Response,
  ) {
    return this.userService.login(userRequest, response);
  }
}
