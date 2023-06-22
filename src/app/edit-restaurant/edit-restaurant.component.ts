import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestaurantHttpService } from '../restaurant-http.service';
import { Restaurant } from '../model';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-edit-restaurant',
  templateUrl: './edit-restaurant.component.html',
  styleUrls: ['./edit-restaurant.component.css'],
})
export class EditRestaurantComponent implements OnInit{
  modifyForm!: FormGroup;
  restaurant!: Restaurant;

  constructor(
    private fb: FormBuilder,
    private service: RestaurantHttpService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const id = Number(paramMap.get('id'));
      this.service.getRestaurantById(id -1).subscribe(restaurant => {
        this.restaurant = restaurant; 
        console.log(id);
      });
    });
    this.modifyForm = this.fb.group({
      // llamo a cada atributo con el nombre que tienen en el model.ts
      name: ['', [Validators.required, Validators.minLength(5)]],
      neighborhood: ['', [Validators.required]],
      photograph: ['', [Validators.required]],
      address: ['', [Validators.required]],
      cuisine_type: ['', [Validators.required]],
      latlng: this.fb.group({
        lat: ['', [Validators.required]],
        lng: ['', [Validators.required]],
      }),
      operating_hours: this.fb.group({
        Monday: ['', [Validators.required]],
        Tuesday: ['', [Validators.required]],
        Wednesday: ['', [Validators.required]],
        Thursday: ['', [Validators.required]],
        Friday: ['', [Validators.required]],
        Saturday: ['', [Validators.required]],
        Sunday: ['', [Validators.required]],
      }),
    });

    this.modifyForm.valueChanges.subscribe((value) => {
      this.restaurant = this.modifyForm.value;
    });
  }

  sendModifyForm() {
    this.restaurant = this.modifyForm.value;
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const id = Number(paramMap.get('id'));
      this.service.updateRestaurant(id, this.restaurant).subscribe((data) => {
        console.log(data)
      });
    });
    
  }
}
