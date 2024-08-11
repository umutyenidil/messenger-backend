import { Controller, Get, Inject, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authService: ClientProxy,
  ) {}

  @Get("user")
  getUser() {
    return this.authService.send(
      {
        cmd: "get-user",
      },
      {},
    );
  }

  @Post("user")
  postUser() {
    return this.authService.send(
      {
        cmd: "post-user",
      },
      {},
    );
  }
}
