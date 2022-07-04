import {
  Controller,
  Body,
  Get,
  Post,
  Param,
  Query,
  Delete,
} from '@nestjs/common';
import { UserInfo } from '../UserInfo';
import { CreateUserDto } from '../dto/create-user.dto';
import { VerifyEmailDto } from '../dto/verify-email.dto';
import { UserLoginDto } from '../dto/user-login.dto';
import { UsersService } from '../service/UsersService';
import { sign } from 'crypto';
// import { UserInfo } from '../UserInfo';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  // create user
  @Post()
  async createUser(@Body() dto: CreateUserDto): Promise<void> {
    const { name, email, password } = dto;
    await this.usersService.createUser(name, email, password);
  }

  // verify email
  @Post('/email-verify')
  async verifyEmail(@Query() dto: VerifyEmailDto): Promise<string> {
    const { signupVerifyToken } = dto;

    return await this.usersService.verifyEmail(signupVerifyToken);
  }

  // login
  @Post('login')
  async login(@Body() dto: UserLoginDto): Promise<string> {
    const { email, password } = dto;

    return await this.usersService.login(email, password);
  }

  // get user info
  @Get('/:id')
  async getUserInfo(@Param('id') userId: string): Promise<UserInfo> {
    return await this.usersService.getUserInfo(userId);
  }

  // user delete
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.rermove(+id);
  }

  // // user info
  // @Get('/:id')
  // async getUserInfo(@Param('id') userId: string): Promise<UserInfo> {
  //   console.log(userId);
  //   return;
  // }
} // end - export class UsersController
