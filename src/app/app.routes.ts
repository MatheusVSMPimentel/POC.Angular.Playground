import { provideRouter, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './navigation/home/home.component';
import { AboutUsComponent } from './institutional/about-us/about-us.component';
import { RegistrationComponent } from './demos/reactiveForms/registration/registration.component';
import { DynamicFormsComponent } from './demos/dynamicForms/dynamic-forms.component';
import { NgModule } from '@angular/core';
import { NotFoundError } from 'rxjs';
import { AuthGuard } from './services/app.guard';
import { RegisterGuard } from './services/register.guard';
import { MoviesComponent } from './demos/pipes/movies/movies.component';

export const routes: Routes = [
    {path:'', redirectTo: '/home', pathMatch:'full'},
    { path: 'home', component: HomeComponent},
    { path: 'about-us', component: AboutUsComponent, canActivate:[AuthGuard] },
    { path: 'register', component: RegistrationComponent, canDeactivate:[RegisterGuard]},
    { path: 'contact-us', component: DynamicFormsComponent},
    {path: 'movies', component: MoviesComponent},
    {path: 'products', 
        loadChildren: () => import('./demos/components-architecture/products/product.module').then(m => m.ProductModule)
    },
    {path: 'admin', 
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
        canLoad:[AuthGuard]
    },
    {path: '**', component: NotFoundError}
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{

}