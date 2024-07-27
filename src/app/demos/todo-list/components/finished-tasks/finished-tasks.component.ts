import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Task } from '../../task';
import { TasksService } from '../../todo.service';
import { Store } from '../../todo.store';

@Component({
  selector: 'finished-tasks',
  templateUrl: './finished-tasks.component.html',
  styles: ``
})
export class FinishedTasksComponent implements OnInit {
  finishedList$ !: Observable<Task[]>;

  constructor(private taskService: TasksService, private store: Store){}

  ngOnInit(): void {
      this.finishedList$ = this.store.getTodoList()
      .pipe(map(
        tasklist => tasklist.filter(task => task.finished)
      ));
  }

  onToggle(event: any){
    this.taskService.changeStatus(event);
  }

}
