import { CommonModule, NgClass, NgFor, NgIf } from "@angular/common";
import { NgModule } from "@angular/core";
import { CustomFormsModule } from "ngx-custom-validators";
import { TasksService } from "./todo.service";
import { Store } from "./todo.store";
import { TodoComponent } from "./todo.component";
import { ToDoTasksComponent } from "./components/to-do-tasks/to-do-tasks.component";
import { DoingTasksComponent } from "./components/doing-tasks/doing-tasks.component";
import { FinishedTasksComponent } from "./components/finished-tasks/finished-tasks.component";
import { TaskListComponent } from "./components/task-list/task-list.component";
import { TaskFormComponent } from "./components/task-form/task-form.component";
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
    
    imports:[
        CommonModule, 
        NgIf,
        NgFor,
        ReactiveFormsModule,
        NgClass
    ],
    providers:[
        CustomFormsModule, TasksService,  { provide: Store, useClass: Store }
    ],
    declarations:[
        TodoComponent,
        ToDoTasksComponent,
        DoingTasksComponent,
        FinishedTasksComponent,
        TaskListComponent,
        TaskFormComponent
    ],
    exports:[
        ToDoTasksComponent,
        FinishedTasksComponent,
        DoingTasksComponent,
        TaskListComponent,
    ]
})
export class ToDoModule{}