import { Controller, Delete, Get, Param, Put } from '@nestjs/common';

@Controller("todo")
export class TodoController {
  constructor() {}

  @Get("hello")
  getHello(): string {
    return "hello world";
  }

  @Delete("delete/:id")
  deleteTodo(@Param('id')id):string{
      return "delete ok "+id
  }

  @Put("update/:id")
  updateTodo(@Param('id')id:string){
      return "update ok"+ id
  }
}