import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService){}
  @EventPattern('new_user')
  handleNewUser(data: any) {
    return this.userService.handleNewUser(data);
  }
}
