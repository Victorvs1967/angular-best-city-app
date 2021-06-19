import { Component, OnInit } from '@angular/core';
import { City } from './model/city.model';
import { DataService } from './services/data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cities?: City[];
  title = 'best-cities-googlemap';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((d: City[]) => this.cities = d);
  }
}
