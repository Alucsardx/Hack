import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-registration3',
  templateUrl: './registration3.component.html',
  styleUrls: ['./registration3.component.scss']
})
export class Registration3Component implements OnInit {

  constructor() { }
  @Output() action = new EventEmitter

  ngOnInit() {
  }

  onNextClick(){
    let action = {
      action: 0,
      data: ""
    }
    this.action.emit(action);
  }
  onCloseClick(){
    let action = {
      action: -1
    }
    this.action.emit(action);
  }
}
