import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product/product.type';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  private _products: Product[] = [];

  constructor(private http: HttpClient) { }

  fetchProducts(): void {
    this.http.get<Product[]>('http://localhost:8080/api/products').subscribe((products: Product[]) => {
      this._products = products;
    });
  }

  get products(): Product[] {
    return this._products;
  }

  get hasProductsInStock(): boolean {
    return this.products.some(product => product.stock > 0);
  }

  decreaseStock(productId: string): boolean {
    const product = this._products.find(prod => prod.id === productId);
    if(product && product.stock > 0) {
      product.stock--;
      return true;
    }
    return false;
  }
}
