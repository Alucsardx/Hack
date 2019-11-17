import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-registration3',
  templateUrl: './registration3.component.html',
  styleUrls: ['./registration3.component.scss']
})
export class Registration3Component implements OnInit {
  public number;
  public nameSurname;
  public age;
  public eMail;
  public phoneNumber;
  public fbAccount;
  constructor() { }
  @Output() action = new EventEmitter

  ngOnInit() {
  }

  onNextClick(){
    let action = {
      action: 0,
      page: 3,
      data: {
        teamMembers: this.number,
        nameSurname: this.nameSurname,
        age: this.age,
        eMail: this.eMail,
        phoneNumber: this.phoneNumber,
        fbAccount: this.fbAccount
      }
    }
    this.action.emit(action);
  }
  onCloseClick(){
    let action = {
      action: -1
    }
    this.action.emit(action);
  }
  onChange(){
    console.log(this.number);
  }
}
