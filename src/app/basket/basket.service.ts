import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, Observable, tap } from 'rxjs';
import { BasketItem } from './basket.types';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  private _items:BasketItem[] = [];

  constructor(private http: HttpClient) { }

  get items(): BasketItem[] {
    return this._items;
  }

  get total(): number {
    return this._items.reduce((total, item) => total + item.price, 0);
  }

  addItem(productId: string): Observable<BasketItem> {
    return this.http.post<BasketItem>('http://localhost:8080/api/basket', {productId}).pipe(
      tap((newBasketItem: BasketItem) => {
        this._items.push(newBasketItem);
      })
    );
  }
}
