import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersDto } from './users.dto';

@Controller('users')
export class UsersController {
  @Post()
  async create(@Body() user: UsersDto) {
    return user;
  }

  @Get()
  async findAll() {
    return [
      {
        id: 1,
        name: 'Vinicius',
        email: 'vinicius@gmail.com',
      },
    ];
  }

  @Get('/:id')
  async findOne(@Param('id') id: string) {
    console.log(+id);

    return {
      id: +id,
      name: 'Vinicius',
      email: 'vinicius@gmail.com',
    };
  }

  @Put('/:id')
  async update(@Param('id') id: string, @Body() user: UsersDto) {
    return {
      id: +id,
      ...user,
    };
  }

  @Delete('/:id')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async remove(@Param('id') id: string) {
    return;
  }
}
