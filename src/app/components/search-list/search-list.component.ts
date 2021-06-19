import { ViewChild } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { MatListModule, MatListOption, MatSelectionList } from '@angular/material/list';
import { City } from 'src/app/model/city.model';
import { DataService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {

  @Input()
  cities: City[] = [];
  filteredCities: City[] = [];
  searchTerm = '';
  selectedCity?: City;
  @ViewChild('cityList') cityList?: MatSelectionList;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.clearSelected.subscribe(d => this.cityList?.deselectAll());
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.searchTerm = filterValue.toLowerCase();
  }

  selectedOption(list: MatListOption[]) {
    this.dataService.selectedCity.next(list[0].value as City);
  }

}
