import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Product } from '../models/product';
import { fromEvent, Observable } from 'rxjs';
import { ProductCountComponent } from './product-count.component';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styles: ``
})
export class ProductDashboardComponent implements OnInit, AfterViewInit  {
  @ViewChild('test', {static: false}) messageScreen!: ElementRef;
  @ViewChild(ProductCountComponent, {static: false}) counterElement!: ElementRef;
  @ViewChildren(ProductCardComponent) productCards!: QueryList<ProductCardComponent>;

  products: Product[] = [];

  constructor(private productService: ProductService) { }
  ngAfterViewInit(): void {
    console.log('Counter Element: ', this.counterElement)

    let clickText : Observable<any> = fromEvent(this.messageScreen.nativeElement,'click')
    clickText.subscribe(()=>{
      alert('Text had been clicked');
    return;
    })

    console.log(this.productCards);
    this.productCards.forEach((p:ProductCardComponent)=> console.log(p.product))
  }

  changeStatus(event: Product){
    event.active = !event.active
  }

  ngOnInit() {
    this.products = this.productService.obterTodos();
  }
}
