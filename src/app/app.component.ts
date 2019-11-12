import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hack';

  onRegisterClick(){
    console.log("register");
  }
  onAboutClick(){
    console.log("about");
  }
  onPartnersClick(){
    console.log("partners");
  }
  onPlaylistClick(){
    console.log("playlist");
  }
}
