import { Component, Input } from '@angular/core';
import { Restaurant } from '../model';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  @Input() restaurants: Restaurant[] = [];

}
