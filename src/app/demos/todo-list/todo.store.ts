import { BehaviorSubject, map, Observable } from "rxjs";
import { Task } from "./task";
import { Injectable } from "@angular/core";

export interface State{
    todoList: Task[]
}

const state: State = {
    todoList: []
}

@Injectable({providedIn: 'root'})
export class Store{
    private subject = new BehaviorSubject<State>(state)
    private store = this.subject.asObservable();

    public getTodoList(): Observable<Task[]>{
        return this.store
        .pipe(
            map(store => store.todoList)
        )
    }

    get state(): State{
        return this.subject.value
    }

    set(name: string, state: any){
        this.subject.next({
            ...this.state, [name]: state
        })
    }
}