import { Component } from '@angular/core';
import { BasketService } from '../basket/basket.service';
import { Product } from '../product/product.type';
import { SelectProductKey } from '../select-product-key/select-product-key.types';
import { CatalogService } from './catalog.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {
  productKey: SelectProductKey = undefined
  constructor(public catalogService: CatalogService, private basketService: BasketService) {

  }

  ngOnInit(): void {
    this.catalogService.fetchProducts().subscribe();
  }

  addToBasket(product: Product) {
    this.basketService.addItem(product.id).subscribe((addedItem) => {
      this.catalogService.decreaseStock(product.id);
    });
  }

  get total(): number {
    return this.basketService.total;
  }

  get products() {
    return this.catalogService.products;
  }

  get hasProductsInStock(): boolean {
    return this.catalogService.hasProductsInStock;
  }
}
