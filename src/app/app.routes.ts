import { provideRouter, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './navigation/home/home.component';
import { AboutUsComponent } from './institutional/about-us/about-us.component';
import { RegistrationComponent } from './demos/reactiveForms/registration/registration.component';
import { DynamicFormsComponent } from './demos/dynamicForms/dynamic-forms.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path:'', redirectTo: '/home', pathMatch:'full'},
    { path: 'home', component: HomeComponent},
    { path: 'about-us', component: AboutUsComponent},
    { path: 'register', component: RegistrationComponent},
    { path: 'contact-us', component: DynamicFormsComponent},
    {path: 'products', 
        loadChildren: () => import('./demos/components-architecture/products/product.module').then(m => m.ProductModule)
    }
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