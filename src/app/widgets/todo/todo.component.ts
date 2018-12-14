import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  newTodo = {
    text: '',
    done: false
  };
  todos = [];

  constructor() {
  }

  ngOnInit() {
  }

  addTodo() {
    this.todos.push(this.newTodo);
    this.resetTodo();
  }

  markDone(index) {
    this.todos[index].done = true;
  }

  resetTodo() {
    this.newTodo = { text: '', done: false };
  }

  deleteItem(index) {
    this.todos.splice(index, 1);
  }
}
