import { Component } from '@angular/core';
import { Product } from '../product/product.type';
import { BasketService } from './basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.css'
})
export class BasketComponent {
  
  constructor(private basketService: BasketService) { }
  
  ngOnInit(): void {
    this.basketService.fetchBasket().subscribe();
  }

  get items() {
    return this.basketService.items;
  }

  get total() {
    return this.basketService.total;
  }


}
