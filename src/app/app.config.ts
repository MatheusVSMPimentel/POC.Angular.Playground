import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {
  provideRouter, withDebugTracing
} from '@angular/router';
import { routes } from './app.routes';
import { provideNgxMask } from 'ngx-mask';
import { QuestionService } from './demos/dynamicForms/question/question.service';
import { AuthGuard } from './services/app.guard';
import { RegisterGuard } from './services/register.guard';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import localePt from "@angular/common/locales/pt";
import { registerLocaleData } from "@angular/common";
import { Store } from './demos/todo-list/todo.store';
import { TasksService } from './demos/todo-list/todo.service';
registerLocaleData(localePt)

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter
      (routes,
        //withDebugTracing()
      ),
    provideNgxMask(), QuestionService,
    AuthGuard,
    RegisterGuard
  ]};
