import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable, subscribeOn } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1>Welcome to {{title}}!</h1>

    <router-outlet />
  `,
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

    const obs = this.myObservable('Matheus');

    obs.subscribe(observer);

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
