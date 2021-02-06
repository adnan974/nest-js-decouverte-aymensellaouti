import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateTodoDto } from "src/dto/createTodo.dto";
import { UpdateTodoDto } from "src/dto/updateTodo.dto";
import { Todo } from "src/entities/todo.entity";
import { TodoRepository } from "src/repository/todo.repository";

@Injectable()
export class TodoService{
    constructor(
        @InjectRepository(TodoRepository)
        private todoRepository: TodoRepository
    ){}

    async getTodoById(id):Promise<Todo>{
        return await this.todoRepository.findOne(id)
    }

    async createTodo(newTodo:CreateTodoDto):Promise<Todo>{
        return await this.todoRepository.save(newTodo);
    }

    async deleteTodoById(id:number):Promise<void>{
        await this.todoRepository.delete(id);
    }

    async getAllTodos():Promise<Todo[]>{
        return await this.todoRepository.find();
    }

    async updateTodo(updatedTodo:UpdateTodoDto):Promise<Todo>{
        let todoToUpdate = await this.todoRepository.findOne(updatedTodo.id)
        todoToUpdate.description = updatedTodo.description ? updatedTodo.description:todoToUpdate.description
        await this.todoRepository.update(todoToUpdate.id,todoToUpdate)
        return todoToUpdate


    }
    
    async softDeleteTodoById(id){
        this.todoRepository.softDelete(id);
    }

    async recoverTodo(id){
        this.todoRepository.restore(id);
    }

}