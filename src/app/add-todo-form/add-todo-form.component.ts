import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoItem } from 'src/data/models/todoItem';

@Component({
  selector: 'add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.css'],
})
export class AddTodoFormComponent implements OnInit {
  @Output() addTodo = new EventEmitter<TodoItem>();
  constructor() {}

  ngOnInit(): void {}

  newTodo: string = '';

  addNewTodo(e: any) {
    e.preventDefault();
    // this.todoItems.push(new TodoItem(this.newTodo, false));
    this.addTodo.emit(new TodoItem(this.newTodo, false));
    this.newTodo = '';
  }
}
