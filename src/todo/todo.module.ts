import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from 'src/entities/todo.entity';
import { TodoRepository } from 'src/repository/todo.repository';
import {TodoController} from './todo.controller'
import { TodoService } from './todo.service';

@Module({
    imports:[TypeOrmModule.forFeature([Todo,TodoRepository])],
    controllers:[TodoController],
    providers:[TodoService],
    exports:[],
})

export class TodoModule{};