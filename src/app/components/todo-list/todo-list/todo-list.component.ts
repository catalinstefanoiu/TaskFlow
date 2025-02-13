import { Component } from '@angular/core';
import { Todo } from '../../../models/todo';
import { TodoItemComponent } from "../../todo-item/todo-item/todo-item.component";
import { TodoService } from '../../../services/todo.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon'

@Component({
  selector: 'app-todo-list',
  imports: [TodoItemComponent, CommonModule, MatButtonModule, FormsModule, MatFormFieldModule, MatInputModule, MatListModule, MatIconModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  isInvalid = true; // initial butonul e dezactivat

  validateInput(value: string): void {
    this.isInvalid = value.trim().length === 0;
  }

  todos: Todo[] = []; // todos este un array care contine obiecte de tip Todo

  // injectam serviciul TodoService
  constructor(private todoService: TodoService) {} 

  // called after the constructor, initializing input properties, and the first call to ngOnChanges.
  // la initializarea componentei, ngOnInit() ia lista de sarcini
  ngOnInit(): void { 
    this.todos = this.todoService.getTodos();
  }
  
  //adauga o sarcina noua
  addTodo(title: string): void {
    if(!title.trim()) return;
    this.todoService.addTodo(title); // folosim serviciul pt a adauga sarcina
    this.todos = this.todoService.getTodos() // actualizam lista de sarcini
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id);
    this.todos = this.todoService.getTodos();
  }
}
