import { Component, Input } from '@angular/core';
import { Todo } from '../../../models/todo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {
  @Input() todo!: Todo; // Folosește `@Input` pentru a permite transmiterea datelor
  // acesta e copilul si todo-list e parintele

  toogleCompletion(): void {
    this.todo.completed = !this.todo.completed // inverseaza starea
  }

}
