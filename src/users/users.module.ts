import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { RedirectController } from './redirect.controller';
import { RedirectService } from './redirect.service';

@Module({
  controllers: [UsersController, RedirectController],
  providers: [UsersService, RedirectService],
})
export class UsersModule {}
