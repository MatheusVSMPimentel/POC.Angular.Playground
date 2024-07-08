import { Routes } from '@angular/router';
import { HomeComponent } from './navigation/home/home.component';
import { AboutUsComponent } from './institutional/about-us/about-us.component';

export const routes: Routes = [
    {path:'', redirectTo: '/home', pathMatch:'full'},
    { path: 'home', component: HomeComponent},
    { path: 'about-us', component: AboutUsComponent},
];
