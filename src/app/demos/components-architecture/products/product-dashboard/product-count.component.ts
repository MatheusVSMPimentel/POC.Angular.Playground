import { Component, Input } from "@angular/core";
import { Product } from "../models/product";

@Component({
    selector: "product-count",
    template:  `
    <div>
        <h3>Produtos</h3>
       <div>
            Produtos Ativos: {{activeProductsCount()}} no total de {{products.length}} Produtos <br><br>
       </div>
    </div>
    `
})

export class ProductCountComponent{
    @Input()
    products !: Product[]

    activeProductsCount(): number{
        if (!this.products) return 0;

        return this.products.filter((product: Product) => product.active).length
    }
}