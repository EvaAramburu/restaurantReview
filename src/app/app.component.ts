import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { RestaurantService } from './restaurant.service';
import { Restaurant } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  restaurants: Restaurant[] = [];
  constructor(private service: RestaurantService) {}

  restaurantHasReviews(restaurant: any) {
    return restaurant.reviews.length > 0;
  }
  numberOfReviews(restaurant: any) {
    return restaurant.reviews.length;
  }

  ngOnInit() {
    this.restaurants = this.service.getRestaurants();
  }
}
