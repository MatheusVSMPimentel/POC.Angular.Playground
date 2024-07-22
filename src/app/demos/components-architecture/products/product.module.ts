import { NgModule } from "@angular/core";
import { ProductDashboardComponent } from "./product-dashboard/product-dashboard.component";
import { CommonModule, NgClass, NgFor, NgIf } from "@angular/common";
import { ProductRoute } from "./product.routes";
import { ProductCardComponent } from "./product-card/product-card.component";
import { ProductCountComponent } from "./product-dashboard/product-count.component";
import { ProductEditComponent } from "./product-edit/product-edit.component";
import { ProductAppComponent } from "./product.app.component";
import { ProductService } from "./services/product.service";
import { ProductResolveService } from "./services/product.resolve";



@NgModule({
    declarations:[
        ProductDashboardComponent,
        ProductCardComponent,
        ProductCountComponent,
        ProductEditComponent,
        ProductAppComponent
    ],
    imports:[
        CommonModule,
        ProductRoute,
        NgFor,
        NgClass,
        NgIf,
    ],
    providers:[
        ProductService,
        ProductResolveService
    ]
})
export class ProductModule{}