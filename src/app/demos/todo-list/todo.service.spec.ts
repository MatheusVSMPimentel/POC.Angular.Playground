import { Observable, Observer } from "rxjs";
import { Task } from "./task";
import { TasksService } from "./todo.service";
import { HttpBackend, HttpClient, provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { HttpClientTestingModule, provideHttpClientTesting } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { Store } from "./todo.store";


describe('Tasks Service', ()=> {
    let service: TasksService;
    let http: HttpClient;
    let httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    beforeEach(()=>{
        const bed = TestBed.configureTestingModule({

            providers: [
                provideHttpClient(),
                {provide: HttpClient, useClass: MockHttp},
                TasksService,
                Store
            ]
        });
        http = bed.inject(HttpClient);
        service = bed.inject(TasksService);
    });

    it('Should return list of tasks.',()=>{
        //spyOn(http, 'get').and.returnValue(createObservableResponse(todoList));

        service.getTodoList$.subscribe((result)=>{
            expect(result.length).toBe(2);
            console.log(result);
            console.log(todoList);
            expect(result).toEqual(todoList);
        })
    });
});


class MockHttp{
    get(){
        return createObservableResponse(todoList)
    }
    /* get(){
        return createObservableResponse([{
            "id": 1,
            "name": "Responder e-mails",
            "finished": false,
            "doing": true
          }])
    } */
}

function createObservableResponse(body: any): Observable<any>{
    return new Observable<any>((observer: Observer<any>)=>{
        observer.next(body);
    })
}

const todoList: Task[] = [{
    "id": 1,
    "name": "Responder e-mails",
    "finished": false,
    "doing": true
  },
  {
    "id": 2,
    "name": "Reunião com fornecedor",
    "finished": false,
    "doing": true
  }]