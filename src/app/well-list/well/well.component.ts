import { Component, OnInit, Output, EventEmitter, Input, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'well',
  templateUrl: './well.component.html',
  styleUrls: ['./well.component.css']
})
export class WellComponent implements OnInit {

  private f:NgForm;
  @Input() sourceKeyMapInput;
  @Output() addWellData : any = new EventEmitter();
  @ViewChild('f') formElementRef : ElementRef;

  constructor() { }

  ngOnInit() {
  }

  addWell(){
    this.addWellData.emit(this.formElementRef["value"]);
  }

}
