import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { Task } from "./task";
import { Store } from "./todo.store";

@Injectable({providedIn: 'root'})
export class TasksService{
    constructor(private client : HttpClient, private store: Store) {
               
    }
    getTodoList$: Observable<Task[]> = this.client
    .get<Task[]>('http://localhost:3000/todolist')
    .pipe(tap(
        next => this.store.set('todoList', next)
    ))

    changeStatus(event: any){
        this.client.put(`http://localhost:3000/todolist/${event.task.id}`, event.task).subscribe(
            ()=>{
                const value = this.store.state.todoList

                const todoList = value.map((task: Task)=> {
                    if(event.task.id === task.id){
                        return{...task, ...event.task};
                    }else{
                        return task;
                    }
                })

                this.store.set('todoList', todoList)
            }
        )
    }
    addTask(task: Task){
        this.client.post('http://localhost:3000/todolist/', task).subscribe(
            ()=>{
                const value = this.store.state.todoList
                value.push(task);

                this.store.set('todoList', value)
            }
        )
    }
/* 
    getToDoList() : Observable<Task[]> {
        return this.client
        .get<Task[]>('http://localhost:3000/todolist')
    } */
}