import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-registration1',
  templateUrl: './registration1.component.html',
  styleUrls: ['./registration1.component.scss']
})
export class Registration1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Output() action = new EventEmitter;

  onNextClick(){
    let data = {
      action: 0
    }
    this.action.emit(data);
  }
  onCloseClick(){
    let action = {
      action: -1
    }
    this.action.emit(action);
  }
}
