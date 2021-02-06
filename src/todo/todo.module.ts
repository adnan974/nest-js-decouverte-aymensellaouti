// #middleware_helmet :1- déclaration middleware.Il existe une autre méthode (#middleware_morgan)
import { HelmetMiddleware } from '@nest-middlewares/helmet';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from 'src/entities/todo.entity';
import { TestMiddleware } from 'src/middlewares/test.middleware';
import { TodoRepository } from 'src/repository/todo.repository';
import {TodoController} from './todo.controller'
import { TodoService } from './todo.service';

@Module({
    imports:[TypeOrmModule.forFeature([Todo,TodoRepository])],
    controllers:[TodoController],
    providers:[TodoService],
    exports:[],
})

// #middleware : associer un middleware perso à une route 
export class TodoModule implements NestModule {

    configure(consumer:MiddlewareConsumer):any{
       consumer
       .apply(TestMiddleware).forRoutes('todo')
        // #middleware_helmet :2- mise en place.Il existe une autre méthode (#middleware_morgan)
       .apply(HelmetMiddleware).forRoutes('todo');
    }


};