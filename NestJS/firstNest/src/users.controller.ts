import { Params } from './../node_modules/@types/express-serve-static-core/index.d';

import { Body, Controller, Get, Inject, Injectable, Optional, Param, Put } from "@nestjs/common";
import { UsersStore } from "./store/users.store";
import { CreateUserDTO } from "./dto";

@Injectable()
@Controller('/users')
export class UsersController {

    //for a dependency
    // constructor(private store: UsersStore) //is same as below
    // constructor(@optional() private store: any){ // used for the optional dependancy mean not necessary
    // constructor(private store: UsersStore) {
    //     console.log(this.store);
    // }

    // constructor(@Inject('DATABASE_NAME') private dbname: string){ 
    //     console.log(this.dbname);
    // }

    // constructor(@Inject('MAIL') private email: string[]){ 
    //     console.log(this.email);
    // }

    // constructor(@Inject('ENV_CONFIG') private env_config: Record<string, any>){ 
    //     console.log(this.env_config);
    // }
    // constructor(@Inject('Event') private event: string){ 
    //     console.log(this.event);
    // }

    // constructor(@Inject('DATABASE_CONNECTION') private connection: string){
    //     console.log(connection);
    // }

    constructor(private store: UsersStore){
        console.log("controller init");
    }




    @Get()
    hello(){
        return "hello";
    }
    // @Put("/:id")
    // UpdateUser(@Body() updatedta : CreateUserDTO,  @Param() params: any){
    //     this.store.updateUser(params.id,updatedta );
    // }

}