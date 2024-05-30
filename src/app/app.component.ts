import { Component } from '@angular/core';
import { TodoItem } from 'src/data/models/todoItem';
import { EventService } from '../data/services/EventService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo-app';
  todoItems: Array<TodoItem> = [];
  filter: any;

  constructor(events: EventService) {
    events.listen(
      'removeTodo',
      (todoId: string) =>
        (this.todoItems = this.todoItems.filter((todo) => todo.name != todoId))
    );
  }

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
