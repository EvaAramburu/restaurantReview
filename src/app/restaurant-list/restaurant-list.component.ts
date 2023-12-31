import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../model';
import { RestaurantService } from '../restaurant.service';
import { RestaurantHttpService } from '../restaurant-http.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
  restaurants: Restaurant[] = [];

  // cambiar restaurantService por restaurantHttpService para observable
  constructor(private service: RestaurantHttpService) {}

  restaurantHasReviews(restaurant: any) {
    return restaurant.reviews.length > 0;
  }
  numberOfReviews(restaurant: any) {
    return restaurant.reviews.length;
  }

  ngOnInit() {
    // this.restaurants = this.service.getRestaurants();
    this.service.getRestaurants().subscribe(restaurants => {
      this.restaurants = restaurants; 
    });
  }
}
