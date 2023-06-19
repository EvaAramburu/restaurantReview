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

    getRestaurantById(id: number): Restaurant | undefined {
        return id > 0 && id < 11 ? RESTAURANTS[id - 1]: undefined;
    }
}