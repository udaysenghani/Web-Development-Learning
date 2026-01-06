import { Injectable, NestMiddleware } from "@nestjs/common";


@Injectable()
export class middleware3 implements NestMiddleware{
    use(req, res, next){
        console.log('reached middleware number 3');
        next();
    }
}