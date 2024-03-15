import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../product/product.type';

@Pipe({
  name: 'sortProducts'
})
export class SortProductsPipe implements PipeTransform {

  transform(products: Product[], sort: string = 'price'): Product[] {
    if (!products || !Array.isArray(products)) {
      return [];
    }

    return products.sort((productA, productB) => {
      if (sort === 'price') {
        return productA.price - productB.price;
      }
      if (sort === 'stock') {
        return productA.stock - productB.stock;
      }
      // Si aucune des conditions ci-dessus n'est remplie, retourne 0 pour maintenir l'ordre actuel.
      return 0;
    });
  }

}
