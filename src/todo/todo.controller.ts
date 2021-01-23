import { Controller, Delete, Get, Post, Param, Put, Body } from '@nestjs/common';
import { CreateTodoDto } from 'src/dto/createTodo.dto';
import { UpdateTodoDto } from 'src/dto/updateTodo.dto';
import { Todo } from 'src/entities/todo.entity';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private todoService:TodoService) {}


  @Get('getall')
  getAllTodos():Promise<Todo[]>{
    return this.todoService.getAllTodos();
  }

  @Get('get/:id')
  getTodo(@Param('id')id :number):Promise<Todo>{
    return this.todoService.getTodoById(id);
  }

  @Post('create')
  createTodo(@Body()newTodo :CreateTodoDto) {
    return this.todoService.createTodo(newTodo)
  }

  @Delete('delete/:id')
  deleteTodo(@Param('id') id:number):void{
       this.todoService.deleteTodoById(id)
  }

  @Put('update')
  updateTodo(@Body() updatedTodoDto:UpdateTodoDto){
    return this.todoService.updateTodo(updatedTodoDto)
  }

  


}