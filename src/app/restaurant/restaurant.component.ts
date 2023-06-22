import { Component, Input } from '@angular/core';
import { Restaurant } from '../model';
import { MatCardAppearance } from '@angular/material/card';
import { RestaurantHttpService } from '../restaurant-http.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent {
  
  @Input() restaurant!: Restaurant;
  constructor(private service: RestaurantHttpService) { }
  showElevate = false; 
  onMouseId = -1;

  onCard(id: number) {
    this.onMouseId = id; 
  }

  delete() {
    // console.log(this.restaurant.id)
    this.service.deleteRestaurant(this.restaurant.id).subscribe();
  }
  edit() {
    // console.log(this.restaurant.id)
    // this.service.updateRestaurant(this.restaurant.id)
  }
  throw() {
    alert("We're working on this function. Coming soon!")
  }
}
