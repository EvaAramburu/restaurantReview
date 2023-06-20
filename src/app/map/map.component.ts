import { Component } from '@angular/core';
import { Restaurant } from '../model';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  restaurants: Restaurant[] = [];

  constructor(private service: RestaurantService) {}
  
  ngOnInit() {
    this.restaurants = this.service.getRestaurants();
  }
}
