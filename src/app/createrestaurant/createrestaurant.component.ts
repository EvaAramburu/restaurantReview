import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Restaurant } from '../model';
import { RestaurantHttpService } from '../restaurant-http.service';

@Component({
  selector: 'app-createrestaurant',
  templateUrl: './createrestaurant.component.html',
  styleUrls: ['./createrestaurant.component.css'],
})
export class CreaterestaurantComponent implements OnInit {
  restaurantForm!: FormGroup;
  restaurant!: Restaurant;

  constructor(
    private fb: FormBuilder,
    private service: RestaurantHttpService
  ) {}
  ngOnInit() {
    this.restaurantForm = this.fb.group({
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

    this.restaurantForm.valueChanges.subscribe((value) => {
      this.restaurant = this.restaurantForm.value;
    });
  }

  sendForm() {
    this.restaurant = this.restaurantForm.value;
    this.service.addRestaurant(this.restaurant).subscribe(() => {
    this.restaurantForm.reset();
    });
  }
}
