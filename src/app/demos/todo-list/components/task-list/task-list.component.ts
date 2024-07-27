import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../task';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() list: Task[] | null = [];

  @Output() toggle = new EventEmitter<any>();

  toggleItem(index: number, action: string) {
    if (this.list === null) return

    const task = this.list[index];

    switch (action) {
      case 'end':
        task.finished = true
        task.doing = false
        break;
      case 'start':
        task.finished = false
        task.doing = true
        break;
      case 'toDo':
        task.finished = false
        task.doing = false
        break;
      default:
        break;
    }

    this.toggle.emit({
      task: {...task}
    })
  }
}
