import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo } from './todo.schema';

@Injectable()
export class TodosService {
  constructor(
    @InjectModel(Todo.name) private readonly todoModel: Model<Todo>,
  ) {}

  getTodos(): Promise<Todo[]> {
    return this.todoModel.find().exec();
  }

  addTodo(title: string): Promise<Todo> {
    const newTodo = new this.todoModel({ title });
    return newTodo.save();
  }

  async toggleComplete(id: number): Promise<Todo | undefined> {
    const todo = await this.todoModel.findById(id).exec()!;
    if (todo) {
      todo.completed = !todo.completed;
      return todo.save();
    }
  }

  // Delete a todo
  async deleteTodo(id: number): Promise<Todo | null> {
    return this.todoModel.findByIdAndDelete(id).exec();
  }
}
