import { provideRouter, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';

export const routes: Routes = [
    {path:'', component: ProductDashboardComponent}
];

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class ProductRoute{

}