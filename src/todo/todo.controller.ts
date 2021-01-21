import { Controller, Delete, Get, Post, Param, Put } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private todoService:TodoService) {}

  @Get('hello')
  getHello(): string {
    return "hello world";
  }

  @Delete('delete/:id')
  deleteTodo(@Param('id') id:string):string{
      return "delete ok "+id
  }

  @Put('update/:id')
  updateTodo(@Param('id') id:string){
      return "update ok"+ id
  }

  @Post('create')
  createTodo(){
    this.todoService.createTodo()
  }

}