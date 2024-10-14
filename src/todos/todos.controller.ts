import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  getTodos() {
    return this.todosService.getTodos();
  }

  @Post()
  addTodo(@Body('title') title: string) {
    return this.todosService.addTodo(title);
  }

  @Put(':id')
  toggleComplete(@Param('id') id: number) {
    return this.todosService.toggleComplete(id);
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: number) {
    return this.todosService.deleteTodo(id);
  }
}
