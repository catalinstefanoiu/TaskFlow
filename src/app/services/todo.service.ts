import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos: Todo[] = [] // stocam toate sarcinile intr un array

  // returneaza lista de sarcini
  getTodos(): Todo[] {
    return this.todos;
  }

  // adauga o sarcina noua
  addTodo(title: string): void {
    const newTodo: Todo = {
      id: this.todos.length + 1, // genereaza un id unic
      title,
      completed: false,
    };
    this.todos.push(newTodo); // adaug sarcina in array
  }

  // schimba starea unei sarcini (finalizata da sau nu)
  toogleToDoCompletion(id: number): void {
    const todo = this.todos.find((t) => t.id === id); // gaseste sarcina dupa id

    if(todo) {
      todo.completed = !todo.completed; // inverseaza starea
    }
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    // filter este o metodă care creează un nou array conținând 
    // doar elementele care trec de o anumită condiție. 
  }
  constructor() { }
}
