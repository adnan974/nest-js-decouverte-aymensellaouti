import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Todo } from "src/entities/todo.entity";
import { Repository } from "typeorm";

@Injectable()
export class TodoService{
    constructor(
        @InjectRepository(Todo)
        private todoRepository:Repository<Todo>
    ){}

    createTodo(){
        this.todoRepository.save({id:1,description:'test'})
    }

}