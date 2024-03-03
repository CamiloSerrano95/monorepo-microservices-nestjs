import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);c

  constructor(@Inject('USER_SERVICE') private readonly client: ClientProxy) {}

  newUser(user:any) {
    this.logger.debug('The user has been created and the event has been broadcasted')
    this.client.emit('new_user', user)
    return 'Hello world from main app';
  }
}
