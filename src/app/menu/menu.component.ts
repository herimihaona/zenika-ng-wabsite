import { Component } from '@angular/core';
import { BasketService } from '../basket/basket.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  numberOfItemsInBasket: number = 0;

  constructor(private basketService: BasketService) { }

  get basketSize() {
    return this.basketService.items.length;
  }

}
