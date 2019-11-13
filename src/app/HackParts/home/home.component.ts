import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailService } from 'src/app/Services/email.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public page = 0;
  
  constructor(private router: Router, private emailService: EmailService) {
    
  }
  ngOnInit(){
    this.emailService.SendEmail();
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
