import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Auth } from './decorators/auth.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/auth')
  @Auth('USER')
  getAuth(): string {
    return this.appService.getAuth();
  }
}
