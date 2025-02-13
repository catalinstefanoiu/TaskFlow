import { Routes } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list/todo-list.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
  { path: '', component: TodoListComponent },  // Ruta principală
  { path: 'about', loadComponent: () => import('./components/about/about.component').then(m => m.AboutComponent), },

];