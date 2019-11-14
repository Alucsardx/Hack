import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-registration2',
  templateUrl: './registration2.component.html',
  styleUrls: ['./registration2.component.scss']
})
export class Registration2Component implements OnInit {

  public textModel = "";
  public currentCount = 0;
  public file;
  constructor() { }

  ngOnInit() {
  }
  @Output() action = new EventEmitter;

  onNextClick(){
    var data = {
      action: 0,
      text: this.textModel,
      file: this.file
    }
    console.log(data);
    this.action.emit(data);
  }
  onCloseClick(){
    var data = {
      action: -1
    }
    this.action.emit(data);
  }

  ngOnChanges(){
    console.log(this.textModel);
  }
  onInput(){
    this.currentCount = this.textModel.length;
  }
  uploadFile(event){
    this.file = event.target['files'][0];
    console.log(this.file);
  }
}
