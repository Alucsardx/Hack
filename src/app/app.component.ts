import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hack';
  public page = 0;
  
  constructor(private router: Router) {
    
  }
  onRegisterClick(){
    this.page = 1;
  }
  onAboutClick(){
    this.router.navigateByUrl("/about");
   
  }
  onPartnersClick(){
    this.router.navigateByUrl("/partners");
  }
  onPlaylistClick(){
    this.router.navigateByUrl("/playlist");
  }
  onContactClick(){
    this.router.navigateByUrl("/contact");
  }
  onAction(action, pageNumber){
    if (action.action == -1) {
      this.page = 0;
      return;
    }
    if (this.page != 4) {
      this.page++;
    }
  }
}
