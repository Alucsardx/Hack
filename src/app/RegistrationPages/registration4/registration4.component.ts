import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-registration4',
  templateUrl: './registration4.component.html',
  styleUrls: ['./registration4.component.scss']
})
export class Registration4Component implements OnInit {

  constructor() { }
  @Output() action = new EventEmitter;
  ngOnInit() {
  }

  onCloseClick(){
    let action = {
      action: -1
    }
    this.action.emit(action);
  }
}
