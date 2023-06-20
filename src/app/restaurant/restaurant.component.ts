import { Component, Input } from '@angular/core';
import { Restaurant } from '../model';
import { MatCardAppearance } from '@angular/material/card';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent {
  
  @Input() restaurant!: Restaurant;
  showElevate = false; 
  onMouseId = -1;
  onCard(id: number) {
    this.onMouseId = id; 
  }
  throw() {
    alert("We're working on this function. Coming soon!")
  }
}
