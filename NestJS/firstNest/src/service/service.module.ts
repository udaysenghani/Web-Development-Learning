import { Module } from '@nestjs/common';
import { ServiceController } from './service.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [ServiceController],
  providers: [UsersService],
})
export class ServiceModule {}
