import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.css']
})
export class FabComponent {
    public openMenu: boolean = false;
    isOver = false;
  
    clickMenu(){
      this.openMenu = !this.openMenu;
    }
  
}
