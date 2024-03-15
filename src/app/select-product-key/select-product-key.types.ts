import { Product } from '../product/product.type';

export type SelectProductKey = keyof Pick<Product, 'price' | 'stock'> | undefined;
