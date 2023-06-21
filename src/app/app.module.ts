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
import {MatBadgeModule} from '@angular/material/badge';
import {MatDividerModule} from '@angular/material/divider';
import { FabComponent } from './fab/fab.component';
import { FooterComponent } from './footer/footer.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditRestaurantComponent } from './edit-restaurant/edit-restaurant.component';



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
    FabComponent,
    FooterComponent,
    EditRestaurantComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatBadgeModule,
    MatToolbarModule,
    MatDividerModule,
    NgMapsCoreModule,
    NgMapsGoogleModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule
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
