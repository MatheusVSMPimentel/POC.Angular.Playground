import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styles: ``
})
export class ProductEditComponent implements OnInit {
  product!: Product;

  constructor(
    private route: ActivatedRoute,
    private productService : ProductService,
    private routerService : Router
  ){}

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        console.log(params['id'])
        this.product = this.productService.getById(params['id']);
      }
    )
  }

  save(){
      this.routerService.navigate(['/produtos']);
      //this.routerService.navigateByUrl('/produtos');
  }
}
