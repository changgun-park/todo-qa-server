import { Injectable } from '@nestjs/common';
import { Todo } from './todo.model';

@Injectable()
export class TodosService {
  private todos: Todo[] = [];
  private idCounter = 1;

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(title: string): Todo {
    const newTodo: Todo = {
      id: this.idCounter++,
      title,
      completed: false,
    };
    this.todos.push(newTodo);
    return newTodo;
  }

  toggleComplete(id: number): Todo | undefined {
    const todo = this.todos.find((t) => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
    return todo;
  }

  deleteTodo(id: number): Todo | null {
    const index = this.todos.findIndex((t) => t.id === id);
    if (index > -1) {
      const [removedTodo] = this.todos.splice(index, 1);
      return removedTodo;
    }
    return null;
  }
}
