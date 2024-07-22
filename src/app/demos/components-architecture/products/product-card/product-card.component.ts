import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styles: ``
})
export class ProductCardComponent {

@Input()
product!: Product;

@Output()
status: EventEmitter<any> = new EventEmitter();

eventEmitter(){
  this.status.emit(this.product);
}

}
