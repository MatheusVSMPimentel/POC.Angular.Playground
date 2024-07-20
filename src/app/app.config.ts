import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {
  PreloadAllModules,
  provideRouter,
  withPreloading,
} from '@angular/router';
import { AppRoutingModule, routes } from './app.routes';
import { provideNgxMask } from 'ngx-mask';
import { QuestionService } from './demos/dynamicForms/question/question.service';


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes, withPreloading(PreloadAllModules)), provideNgxMask(), QuestionService]
};
