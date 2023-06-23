import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Restaurant } from '../model';
import { RestaurantHttpService } from '../restaurant-http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createrestaurant',
  templateUrl: './createrestaurant.component.html',
  styleUrls: ['./createrestaurant.component.css'],
})
export class CreaterestaurantComponent implements OnInit {
  restaurantForm!: FormGroup;
  restaurant!: Restaurant;

  loading: boolean = false;
  error: boolean = false;

  constructor(
    private fb: FormBuilder,
    private service: RestaurantHttpService,
    private router: Router
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
        Monday: ['', [Validators.required, this.validateOperatingHours]],
        Tuesday: ['', [Validators.required, this.validateOperatingHours]],
        Wednesday: ['', [Validators.required, this.validateOperatingHours]],
        Thursday: ['', [Validators.required, this.validateOperatingHours]],
        Friday: ['', [Validators.required, this.validateOperatingHours]],
        Saturday: ['', [Validators.required, this.validateOperatingHours]],
        Sunday: ['', [Validators.required, this.validateOperatingHours]],
      }),
    });

    this.restaurantForm.valueChanges.subscribe((value) => {
      this.restaurant = this.restaurantForm.value;
    });
  }
  validateOperatingHours(control: AbstractControl): ValidationErrors | null {
    const pattern = 
    '^\\d?\\d:\\d?\\d (pm|am) - \\d?\\d:\\d?\\d (pm|am)(, \\d?\\d:\\d?\\d (pm|am) - \\d?\\d:\\d?\\d (pm|am))?$';
    const regex = new RegExp(pattern);
    const value = control.value; 
    const isValid = regex.test(value);

    if (isValid) {
      return null; 
    } else {
      return { wrong_operating_hours: 'Wrong format'};
    }
  }
  sendForm() {
    this.restaurant = this.restaurantForm.value;
    this.loading = true; 
    this.service.addRestaurant(this.restaurant).subscribe({
      next: (restaurant) => {
        this.loading = false; 
        this.router.navigate(['restaurants', restaurant.id]);
      },
      error: (error) => {
        this.loading = false; 
        this.error = true;
      }
    });
  }
}
