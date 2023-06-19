import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CreaterestaurantComponent } from './createrestaurant/createrestaurant.component';

const routes: Routes = [
  { path: 'restaurants', component: RestaurantListComponent },
  { path: '', redirectTo: '/restaurants', pathMatch: 'full'},
  { path: 'new', component: CreaterestaurantComponent},
  { path: '**', component: PagenotfoundComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
