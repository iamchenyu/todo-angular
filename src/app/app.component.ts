import { Component } from '@angular/core';
import { TodoItem } from 'src/data/models/todoItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo-app';
  todoItems: Array<TodoItem> = [
    new TodoItem('Walk Horton', false),
    new TodoItem('Cook Dinner', false),
    new TodoItem('Morning Yoga', true),
  ];
  filter: any;

  // get visibleTodos(): Array<TodoItem> {
  //   // let filterValue = this.todoFilter;
  //   return this.todoItems.filter(this.filter);
  //   // no need for this since we have filters variable
  //   // if (filterValue == '0') {
  //   //   return this.todoItems;
  //   // } else if (filterValue == '1') {
  //   //   return this.todoItems.filter((todo) => !todo.isFinished);
  //   // } else if (filterValue == '2') {
  //   //   return this.todoItems.filter((todo) => todo.isFinished);
  //   // } else {
  //   //   throw new Error('Not a valid filter');
  //   // }
  // }

  //   changeFilter(filter: any) {
  //     this.filter = filter;
  //   }
}
