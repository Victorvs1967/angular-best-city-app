import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { City } from '../model/city.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  selectedCity = new Subject<City>();
  clearSelected = new Subject<boolean>();
  
  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('assets/data.csv', { responseType: 'text' })
      .pipe(map(d => this.convertToObject(d)));
  }

  convertToObject(data: any): City[] {
    let result: City[] = [];
    let dataArray = data.split('\n');
    for (let index = 1; index < dataArray.length - 1; index++ ) {
      let [ rank, city, latitude, longitude, population, country, place, product, programming, people, prosperity, promotion, ] = dataArray[index].split(',');
      const newCity = new City(
        +rank, city, +latitude, +longitude, +population, country, +place, +product, +programming, +people, +prosperity, +promotion,
      );
      result.push(newCity);
    }
    return result;
  }
}
