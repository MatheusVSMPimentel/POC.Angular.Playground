import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Task } from '../../task';
import { TasksService } from '../../todo.service';
import { Store } from '../../todo.store';

@Component({
  selector: 'doing-tasks',
  templateUrl: './doing-tasks.component.html',
  styles: ``
})
export class DoingTasksComponent implements OnInit {
  doingList$ !: Observable<Task[]>;

  constructor(private taskService: TasksService, private store: Store){}

  ngOnInit(): void {
      this.doingList$ = this.store.getTodoList()
      .pipe(map(
        tasklist => tasklist.filter(task => task.doing && !task.finished)
      ));
  }

  onToggle(event: any){
    this.taskService.changeStatus(event);
  }

}