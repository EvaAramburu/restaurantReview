export class Restaurant {
    id!: number;
    name?: string;
    neighborhood?: string;
    photograph?: string;
    address?: string;
    cuisine_type?: string;
    reviews?: Review[];
    latlng?: {lat: number, lng: number};
    operating_hours: any;
}

export class Review {
    name?: string; 
    date?: string;
    rating?: number;
    comments?: string;
}