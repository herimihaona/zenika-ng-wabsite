import { Component } from '@angular/core';
import { Product } from './product/product.type';
import { CatalogService } from './catalog/catalog.service';
import { BasketService } from './basket/basket.service';
import { SelectProductKey } from './select-product-key/select-product-key.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my first component';
  productKey: SelectProductKey = undefined
  constructor(public catalogService: CatalogService, private basketService: BasketService) {

  }

  addToBasket(product:Product) { 
    this.catalogService.decreaseStock(product.id);
    this.basketService.addItem(product);
  }

  get total():number {
    return this.basketService.total;
  }

  get products() {
    return this.catalogService.products;
  }

  get hasProductsInStock(): boolean {
    return this.catalogService.hasProductsInStock;
  }
}
