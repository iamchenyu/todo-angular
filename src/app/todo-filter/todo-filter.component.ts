import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from 'src/data/models/todoItem';

const filters = [
  (todo: TodoItem) => todo,
  (todo: TodoItem) => !todo.isFinished,
  (todo: TodoItem) => todo.isFinished,
];

@Component({
  selector: 'todo-filter',
  templateUrl: './todo-filter.component.html',
  styleUrls: ['./todo-filter.component.css'],
})
export class TodoFilterComponent implements OnInit {
  @Input() filter: any;
  @Output() filterChange = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {
    this.changeFilter('0');
  }

  todoFilter: any = '0';

  changeFilter(value: any) {
    // this.todoFilter = value;
    this.filter = filters[value];
    this.filterChange.emit(this.filter);
  }
}
