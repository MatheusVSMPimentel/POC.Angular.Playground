import { NgModule } from "@angular/core";
import { ProductDashboardComponent } from "./product-dashboard/product-dashboard.component";
import { CommonModule, NgFor } from "@angular/common";
import { ProductRoute } from "./product.routes";

@NgModule({
    declarations:[
        ProductDashboardComponent
    ],
    imports:[
        CommonModule,
        ProductRoute,
        NgFor
    ]
})
export class ProductModule{}