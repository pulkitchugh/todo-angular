import {Component, OnDestroy, OnInit} from '@angular/core';
import {TodoService} from "../todo-list/todo.service";
import {Todo} from "../todo-list/todo.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-todo-completed',
  templateUrl: './todo-completed.component.html',
  styleUrls: ['./todo-completed.component.css']
})
export class TodoCompletedComponent implements OnInit,OnDestroy {
completedTodos:Todo[]=[];
completedTodosSubscription:Subscription;
  constructor(private todoService:TodoService) { }

  ngOnInit() {
    this.completedTodosSubscription = this.todoService.todosUpdated.subscribe(
      (todos: Todo[]) => {
        this.completedTodos = todos.filter(todo=>{
          return todo.todoCompleted;
        });
        // console.log(this.todos);
      }
    );
    this.completedTodos = this.todoService.getTodos().filter(todo=>{
      return todo.todoCompleted;
    });
  }
  ngOnDestroy() {
    this.completedTodosSubscription.unsubscribe();
  }

}
