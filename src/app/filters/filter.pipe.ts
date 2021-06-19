import { Pipe, PipeTransform } from '@angular/core';
import { City } from '../model/city.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: City[], term: string): City[] {
    return value.filter(c => c.City?.toLowerCase().includes(term) || c.Country?.toLowerCase().includes(term));
  }

}
