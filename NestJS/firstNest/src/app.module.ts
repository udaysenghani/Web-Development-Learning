import { Constructor } from './../node_modules/make-error/index.d';
import { EventType } from './../node_modules/watchpack/types/watchEventSource.d';
import { HttpException, Inject, Injectable, MiddlewareConsumer, NestMiddleware } from '@nestjs/common';
import { Module } from '@nestjs/common';
import { UsersController } from "./users.controller"
import { AlbumController } from "./albums.controller";
import { UsersStore } from './store/users.store';
import { Store } from './store/store';
import { ServiceModule } from './service/service.module';
import { ServiceController } from './service/service.controller';
import { UsersService } from './service/users.service';
import { middleware3 } from './middleware/middleware3';
import middleware1 from './middleware/middleware1';
import { error } from 'console';


const val = Math.floor(Math.random()*10)+1;

@Injectable()
class EnvConfig{
  EnvType: 'dev'| 'stage' | 'Prod';

  Constructor(){
    this.EnvType="dev";
  }
}

function createConnection(){
  return "Connected";
}

@Module({
  controllers: [UsersController, AlbumController,ServiceController],
  providers: [{ provide: UsersStore, useClass: UsersStore},UsersService
              // {provide: 'DATABASE_NAME', useValue: 'MOON_KNIGHT'},
              // {provide: 'MAIL', useValue: ['admin@gmail.com','user@gmail.com']},
              // {provide: 'ENV_CONFIG', useValue:{type: 'DEV', node: '17'}},
              // {provide: 'Event', useFactory: (config: EnvConfig,limit:number)=>{
              //   console.log(limit);
              //   console.log(config);
              //   if(val>5){
              //     return "yes";
              //   }else{return "No"};
              // },
              //   inject : [EnvConfig,'LIMIT'],
              // },
              // EnvConfig,
              // {provide: 'LIMIT', useValue:23},

              // {provide: 'DATABSE_CONNECTION', useFactory: async()=>{     
              //   return "connected";
              //   },
              // // inject:[],
              // }
            ],
  imports: [ServiceModule],
  // providers: [UsersStore]; short syntax saame as above if both name is same
  //{name, which class} register
})
export class AppModule implements NestMiddleware{
  use(req: any, res: any, next: (error?: any) => void) {
    throw new error('Method not implemented.');
  }
  configure(consumer: MiddlewareConsumer){
    consumer.apply(middleware1,middleware3).exclude().forRoutes(ServiceController); //also define conroller as route
  }
}
 