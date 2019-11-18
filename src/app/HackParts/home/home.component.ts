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
  public data: any;
  public register2Data: any;
  public register3Data: any;
  constructor(private router: Router, private emailService: EmailService) {
    
  }
  ngOnInit(){
    // this.emailService.UploadFIle().subscribe((data) => console.log(data));
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
  onAction(action, info){
    if (action.action == -1) {
      this.page = 0;
      return;
    }
    else if (action.action == 0) {
      if (action.page == 2) {
        this.register2Data ={
          text: action.text,
          file: action.file
        }
      }
      if (action.page == 3) {
        this.register3Data = action.data;
        this.data = {
          InputField: this.register2Data.text,
          UploadedFile: this.register2Data.file,
          Information: this.register3Data
        };

        this.emailService.UploadFIle(this.data.UploadedFile, JSON.stringify({InputField: this.register2Data.text,
                                                                              Information: this.register3Data })).subscribe((data) => console.log(data));
      }
    }
    if (this.page != 4) {
      this.page++;
    }
  }

}
