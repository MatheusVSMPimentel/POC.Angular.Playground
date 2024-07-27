import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TasksService } from '../../todo.service';
import { Task } from '../../task';
import { Store } from '../../todo.store';
import { map } from 'rxjs';

@Component({
  selector: 'task-form',
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent implements OnInit {
  invalidTaskName: string = "The task name needs to contain more than 10 characters.";
  displayMessage !: string[];
  registerTaskForm !: FormGroup;

  constructor(private fb: FormBuilder, private taskService: TasksService, private store: Store) { }

  ngOnInit(): void {
    this.registerTaskForm = this.fb.group({
      task: new FormControl('', [Validators.minLength(10)])
    });

  }

  propIsValid(): boolean { return (this.registerTaskForm.get('task')?.errors && (this.registerTaskForm.get('task')?.dirty || this.registerTaskForm.get('task')?.touched)) ?? false };

  addTask(){
    if (this.registerTaskForm.dirty && this.registerTaskForm.valid) {
      let task: Task;
      this.store.getTodoList().pipe(
        map(tasks => tasks.map(task => task.id)), // Extract ids
        map(ids => Math.max(...ids)) // Find the max id
      ).subscribe(maxId => {
        task =  {
          id: ++maxId,
          name: this.registerTaskForm.value.task,
          doing: false,
          finished: false
        }
        this.taskService.addTask(task);
      }).unsubscribe();
    }
    return
  }
}

