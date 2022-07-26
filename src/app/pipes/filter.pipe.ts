import { Pipe, PipeTransform } from '@angular/core';
import { TProduct } from '../models/product.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products: TProduct[], searchValue: string): TProduct[] {
    if (!searchValue) return products
    return products.filter(product => product.title.toLowerCase().includes(searchValue.toLowerCase()))
  }

}
