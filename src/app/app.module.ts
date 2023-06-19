import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button'; 
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { RestaurantComponent } from './restaurant/restaurant.component';
import { HeaderComponent } from './header/header.component';
import { NgMapsCoreModule } from '@ng-maps/core';
import { NgMapsGoogleModule, GOOGLE_MAPS_API_CONFIG } from '@ng-maps/google';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreaterestaurantComponent } from './createrestaurant/createrestaurant.component';
import { RestaurantdetailComponent } from './restaurantdetail/restaurantdetail.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantComponent,
    HeaderComponent,
    RestaurantListComponent,
    PagenotfoundComponent,
    NavbarComponent,
    CreaterestaurantComponent,
    RestaurantdetailComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    NgMapsCoreModule,
    NgMapsGoogleModule
  ],
  providers: [{
    provide: GOOGLE_MAPS_API_CONFIG,
    useValue: {
      apiKey: ''
    }
}],
  bootstrap: [AppComponent]
})
export class AppModule { }
