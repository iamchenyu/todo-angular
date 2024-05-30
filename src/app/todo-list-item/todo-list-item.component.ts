import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from 'src/data/models/todoItem';

@Component({
  selector: 'todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css'],
})
export class TodoListItemComponent implements OnInit {
  @Input() todoText!: string;
  @Input() todoState!: boolean;
  @Input() todoId!: string;
  @Output() todoStateChange = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}

  toggleTodoState() {
    this.todoState = !this.todoState;
    this.todoStateChange.emit(this.todoState);
  }
}
