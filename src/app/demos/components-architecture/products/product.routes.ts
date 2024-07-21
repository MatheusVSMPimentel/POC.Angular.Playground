import { provideRouter, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductAppComponent } from './product.app.component';

export const routes: Routes = [
    {path:'', component: ProductAppComponent,
        children:[
            {path:'', redirectTo: 'all'},
            {path:':status', component: ProductDashboardComponent},
            {path:'edit/:id', component: ProductEditComponent},
        ]
    },
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