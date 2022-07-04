import { Module } from '@nestjs/common';
import { UsersController } from './users/controller/UsersController';
import { EmailService } from './users/service/EmailService';
import { UsersService } from './users/service/UsersService';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService, EmailService],
})
export class AppModule {}
