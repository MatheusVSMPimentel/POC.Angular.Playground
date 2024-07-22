import { provideRouter, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductAppComponent } from './product.app.component';
import { ProductResolveService } from './services/product.resolve';

export const routes: Routes = [
    {path:'', component: ProductAppComponent,
        children:[
            {path:'', redirectTo: 'all', pathMatch:'full'},
            {path:'edit/:id', component: ProductEditComponent},
            {path:':status', component: ProductDashboardComponent,
                resolve:
                {
                    products : ProductResolveService
                },
                data:{
                    testData: 'Data Test Successed'
                }
            },
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