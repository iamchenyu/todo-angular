import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from 'src/data/models/todoItem';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  @Input() todos: Array<TodoItem> = [];
  constructor() {}

  ngOnInit(): void {}
}
