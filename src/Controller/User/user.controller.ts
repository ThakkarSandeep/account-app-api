import { Controller, Get, Param, Post} from '@nestjs/common';


@Controller()
export class UserController {
  @Get('users')
  findAll(): string {
    return 'This action returns all users';
  }

  @Get('users:id')
  findOne(@Param() params: any): string {
    return `This action returns a #${params.id} cat`;
  }

  @Post()
  create(): string {
    return 'This actio add to new record';
  }
}
