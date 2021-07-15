import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ActionType } from 'mylib';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // This decorator sets metadata to be used by my library guard
  @ActionType('write')
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
