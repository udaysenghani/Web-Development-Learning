import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDTO } from 'src/dto';
import { UsersService } from './users.service';

@Controller('/service')
export class ServiceController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  createUser(@Body() createUserDTO: CreateUserDTO){
    this.usersService.addUser(createUserDTO);
    return {message: "User added"};
  }

  @Get()
  findAllusers(){
    console.log("controller");
    return this.usersService.getUsers();
  }

  @Get(':id')
  findUser(@Param('id') id: number){
    return this.usersService.getUser(+id);
  }

  @Put(':id')
  updateUser(@Param('id') id: number, @Body() updateUserDTO: CreateUserDTO){
    this.usersService.updateUser(+id, updateUserDTO);
    return {messagr: "USER Updated"}
  }

  @Delete(':id')
  deleteUser(@Param('id') id:number){
    this.usersService.deleteUser(+id);
    return {message: "User Deleted"};
  }
}
