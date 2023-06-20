import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable }from 'rxjs';
import { Restaurant } from './model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantHttpService {

  constructor(private http: HttpClient) { }

  getRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>('http://107.191.63.129:8000/restaurants/')
  }

  // Pendiente de completar y sustituir este método porel que usa restaurantservice
  // getRestaurantById(id: number): Observable<Restaurant> {
  //   resturn this.http.get<Restaurant[]>()
  // }
}
