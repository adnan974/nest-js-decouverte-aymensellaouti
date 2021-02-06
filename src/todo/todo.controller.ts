import { Controller, Delete, Get, Post, Param, Put, Body, ParseIntPipe, UseInterceptors } from '@nestjs/common';
import { CreateTodoDto } from 'src/dto/createTodo.dto';
import { UpdateTodoDto } from 'src/dto/updateTodo.dto';
import { Todo } from 'src/entities/todo.entity';
import { RequestTimeInterceptor } from 'src/interceptors/request-time.interceptor';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private todoService:TodoService) {}

  @UseInterceptors(RequestTimeInterceptor)
  @Get('getall')
  getAllTodos():Promise<Todo[]>{
    return this.todoService.getAllTodos();
  }

  @Get('get/:id')
  getTodo(@Param('id',ParseIntPipe)id :number):Promise<Todo>{
    return this.todoService.getTodoById(id);
  }

  @Post('create')
  createTodo(@Body()newTodo :CreateTodoDto):Promise<Todo> {
    return this.todoService.createTodo(newTodo);
  }

  @Delete('delete/:id')
  deleteTodo(@Param('id',ParseIntPipe) id:number):void{
       this.todoService.deleteTodoById(id);
  }

  @Delete('softdelete/:id')
  softDeleteTodo(@Param('id',ParseIntPipe) id:number):void{
    this.todoService.softDeleteTodoById(id);
  }

  @Post('recover/:id')
  recovertodo(@Param('id') id){
    this.todoService.recoverTodo(id);
  }

  @Put('update')
  updateTodo(@Body() updatedTodoDto:UpdateTodoDto):Promise<Todo>{
    return this.todoService.updateTodo(updatedTodoDto)
  }

  


}