import { Component, OnInit } from '@angular/core';
import {  RouterModule, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { NavigationModule } from './navigation/navigation.module';
import { ToDoModule } from './demos/todo-list/todo.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavigationModule],
  providers: [],
  templateUrl: 'app.component.html',
  styles: [],
})
export class AppComponent implements OnInit {

  title = 'RXJS';

  ngOnInit(): void {
    //this.myPromise('Eduardo').then(result=> console.log(result)).catch(rejected => console.log(rejected))

    /*     this.myObservable("").subscribe({
          next: (v) => console.log(v),
          error: (e) => console.error(e),
          complete: () => console.info('complete')
        }); */

    const observer = {
      next: (valor: any) => console.log('Next: ', valor),
      error: (erro: any) => console.log('Erro: ', erro),
      complete: () => console.info('complete')
    }

   // const obs = this.myObservable('Matheus');
    const obs = this.userObservable('Admin',"admin@admin.com");

    const subscription = obs.subscribe(observer);
    setTimeout(() => {
      subscription.unsubscribe();
      console.log('Connection closed status: ' + subscription.closed);
    }, 3500);
  }

  myObservable(name: string): Observable<string> {
    return new Observable(subscriber => {
      if (name === "Matheus") {
        subscriber.next("Ola! " + name);
        subscriber.next("Ola! de novo " + name);
        setTimeout(() => {
          subscriber.next("Resposta com delay. " + name);
        }, 5000);
        subscriber.complete();
      } else {
        subscriber.error('Ops! Você não é o Matheus.');
      }
    })
  }
  userObservable(name: string, email: string): Observable<UserTest> {
    return new Observable(subscriber => {
      if (name === "Admin") {
        let user = new UserTest(name, email);
        setTimeout(() => {
          subscriber.next(user);
        }, 1000);
        
        setTimeout(() => {
          subscriber.next(user);
        }, 2000);

        setTimeout(() => {
          subscriber.next(user);
        }, 3000);
        
        setTimeout(() => {
          subscriber.next(user);
        }, 4000);
        
        setTimeout(() => {
          subscriber.complete();
        }, 5000);
      } else {
        subscriber.error('Ops! We found a erro.');
      }
    })
  }
  myPromise(name: string): Promise<string> {
    return new Promise((resolve, reject) => {
      if (name === "Matheus") {
        setTimeout(() => {
          resolve("Welcome " + name);
        }, 1000)
      } else {
        reject('Ops! Você não é o Matheus.');
      }
    })
  }
}

export class UserTest {
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
  name: string;
  email: string;
}