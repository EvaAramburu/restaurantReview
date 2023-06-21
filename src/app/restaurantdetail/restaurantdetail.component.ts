import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { RestaurantService } from '../restaurant.service';
import { Restaurant } from '../model';
import { RestaurantHttpService } from '../restaurant-http.service';
@Component({
  selector: 'app-restaurantdetail',
  templateUrl: './restaurantdetail.component.html',
  styleUrls: ['./restaurantdetail.component.css'],
})
export class RestaurantdetailComponent implements OnInit {
  restaurant?: Restaurant;

  constructor(
    private restaurantService: RestaurantService,
    private service: RestaurantHttpService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Guarda la id de la url de cada restaurante
    // const id = Number(this.route.snapshot.paramMap.get('id'));
    
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const id = Number(paramMap.get('id'));
     // console.log(id)
      this.service.getRestaurantById(id).subscribe(restaurant => {
        this.restaurant = restaurant; 
      });
    });

    
  }
}
