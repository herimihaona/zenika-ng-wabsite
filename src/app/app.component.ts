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
}
