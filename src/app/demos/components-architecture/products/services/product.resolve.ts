import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, MaybeAsync, Resolve, RouterStateSnapshot } from "@angular/router";
import { Product } from "../models/product";
import { ProductService } from "./product.service";

@Injectable()
export class ProductResolveService implements Resolve<Product[]>{
    
    
    constructor(private productService: ProductService) {
        
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<Product[]> {
        return this.productService.getAll(route.params['status'])
    } 

}