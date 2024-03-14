import { Injectable } from '@angular/core';
import { Product } from '../product/product.type';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  private _products: Product[] = [
    {
      "id": "welsch",
      "title": "Coding the welsch",
      "description": "Tee-shirt col rond - Homme",
      "photo": "/assets/coding-the-welsch.jpg",
      "price": 20,
      "stock": 1
    },
    {
      "id": "world",
      "title": "Coding the world",
      "description": "Tee-shirt col rond - Homme",
      "photo": "/assets/coding-the-world.jpg",
      "price": 18,
      "stock": 2
    },
    {
      "id": "vador",
      "title": "Duck Vador",
      "description": "Tee-shirt col rond - Femme",
      "photo": "/assets/coding-the-stars.jpg",
      "price": 21,
      "stock": 3
    },
    {
      "id": "snow",
      "title": "Coding the snow",
      "description": "Tee-shirt col rond - Femme",
      "photo": "/assets/coding-the-snow.jpg",
      "price": 19,
      "stock": 0
    }
  ];

  constructor() { }

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
