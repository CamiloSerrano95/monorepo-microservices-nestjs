import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  handleNewUser(data: any) {
    this.logger.debug('This is the event sent by client (main app)')
    console.log(data)
  }
}
