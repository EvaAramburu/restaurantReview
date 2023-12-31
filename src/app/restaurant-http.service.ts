import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Restaurant } from './model';

@Injectable({
  providedIn: 'root',
})
export class RestaurantHttpService {
  baseURL: string = 'http://107.191.63.129:8000/restaurants/';
  dltURL: string = 'http://107.191.63.129:8000/restaurants';

  constructor(private http: HttpClient) {}

  getRestaurants(): Observable<Restaurant[]> {
     return this.http.get<Restaurant[]>(this.baseURL);
  }
  getRestaurantById(id: number): Observable<Restaurant> {
    const url = `${this.dltURL}/${id}`;
    return this.http.get<Restaurant>(url).pipe(
      catchError((err) => {
        console.error(err);
        throw err;
      })
    );
  }

  addRestaurant(restaurant: Restaurant): Observable<Restaurant> {
    const headers = { 'content-type': 'application/json' };
    return this.http
      .post<Restaurant>(this.baseURL, restaurant, { headers: headers })
      .pipe(
        catchError((err) => {
          alert('err');
          throw err;
        })
      );
  }
  
  deleteRestaurant(id: number): Observable<unknown> {
    const url = `${this.dltURL}/${id}`;
     return this.http.delete(url).pipe(
      catchError((err) => {
        alert('err');
        throw err;
      })
    ) 
  }

  updateRestaurant(id: number, restaurant: Restaurant): Observable<Restaurant> {
    const url = `${this.dltURL}/${id}/`;
    return this.http.patch<Restaurant>(url, restaurant).pipe(
      catchError((err) => {
        console.error(err);
        throw err;
      })
    );
  }
}
