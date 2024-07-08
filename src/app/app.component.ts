import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

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
    this.myPromise('Eduardo').then(result=> console.log(result)).catch(rejected => console.log(rejected))
  }
  myPromise(name: string): Promise<string>{
    return new Promise((resolve, reject )=>{
      if (name === "Matheus"){
        setTimeout(()=>{
          resolve("Welcome " + name);
        }, 1000)
      }else{
        reject('Ops! Você não é o Matheus.');
      }
    })
  }
}
