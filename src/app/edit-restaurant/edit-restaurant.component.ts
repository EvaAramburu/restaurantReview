import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';
import { RestaurantHttpService } from '../restaurant-http.service';
import { Restaurant } from '../model';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';


@Component({
  selector: 'app-edit-restaurant',
  templateUrl: './edit-restaurant.component.html',
  styleUrls: ['./edit-restaurant.component.css'],
})
export class EditRestaurantComponent implements OnInit {
  modifyForm!: FormGroup;
  restaurant!: Restaurant;

  loading: boolean = false; 
  error: boolean = false; 

  constructor(
    private fb: FormBuilder,
    private service: RestaurantHttpService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const id = Number(paramMap.get('id'));
      this.service.getRestaurantById(id - 1).subscribe((restaurant) => {
        this.restaurant = restaurant;
        console.log(id);
        this.modifyForm.patchValue(restaurant);
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
        Monday: ['', [Validators.required, this.validateOperatingHours]],
        Tuesday: ['', [Validators.required, this.validateOperatingHours]],
        Wednesday: ['', [Validators.required, this.validateOperatingHours]],
        Thursday: ['', [Validators.required, this.validateOperatingHours]],
        Friday: ['', [Validators.required, this.validateOperatingHours]],
        Saturday: ['', [Validators.required, this.validateOperatingHours]],
        Sunday: ['', [Validators.required, this.validateOperatingHours]],
      }),
    });

    this.modifyForm.valueChanges.subscribe((value) => {
      this.restaurant = this.modifyForm.value;
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
      return { wrong_operating_hours: 'Wrong format' };
    }
  }
  sendModifyForm() {
    this.restaurant = this.modifyForm.value;
    this.loading = true; 
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const id = Number(paramMap.get('id'));
      this.service.updateRestaurant(id, this.restaurant).subscribe({
        next: (restaurant) => {
          this.loading = false; 
          this.router.navigate(['/restaurants', restaurant.id]);
        },
        error: (error) => {
          this.loading = false;
          this.error = true; 
        }
      });
    })}
}
