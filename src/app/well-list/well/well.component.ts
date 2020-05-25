import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'well',
  templateUrl: './well.component.html',
  styleUrls: ['./well.component.css']
})
export class WellComponent implements OnInit {

  private f:NgForm;
  @Output() addWellData : any = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addWell(wellForm){
    console.log(wellForm.value);
    this.addWellData.emit(wellForm.value);
  }

}
