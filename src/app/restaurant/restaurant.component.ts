import { Component, Input } from '@angular/core';
import { Restaurant } from '../model';

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
}
