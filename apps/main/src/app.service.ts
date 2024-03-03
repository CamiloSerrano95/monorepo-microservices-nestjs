import { Injectable, Logger } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: 'user',
        port: 3000,
      },
    });
  }

  newUser(user:any) {
    this.logger.debug('The user has been created and the event has been broadcasted')
    this.client.emit('new_user', user)
    return 'Hello world from main app';
  }
}
