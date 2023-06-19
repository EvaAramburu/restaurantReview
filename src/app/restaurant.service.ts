import { Injectable } from "@angular/core";
import { RESTAURANTS } from "./mock";
import { Restaurant } from "./model";


@Injectable({
    providedIn: 'root'
})
export class RestaurantService {
    getRestaurants(): Restaurant[] {
        return RESTAURANTS; 
    }
}