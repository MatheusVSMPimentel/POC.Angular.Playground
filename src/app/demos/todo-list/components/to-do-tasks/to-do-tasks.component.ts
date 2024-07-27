import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Observable, Subscription } from 'rxjs';
import { TasksService } from '../../todo.service';
import { Task } from '../../task';
import { Store } from '../../todo.store';

@Component({
  selector: 'to-do-tasks',
  templateUrl: './to-do-tasks.component.html',
  styles: ``
})
export class ToDoTasksComponent implements OnInit, OnDestroy {
  todoList$ !: Observable<Task[]>;
  subscription !: Subscription;

  constructor(private taskService: TasksService, private store: Store) { }
  
  onToggle(event: any){
    this.taskService.changeStatus(event);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.todoList$ = this.store.getTodoList()
      .pipe(map(
        tasklist => tasklist.filter(task => !task.doing && !task.finished)
      ));

    this.subscription = this.taskService.getTodoList$.subscribe();
  }
}
