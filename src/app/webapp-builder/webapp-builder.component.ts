import { Component, OnInit } from '@angular/core';
import { ComponentGeneratorService } from './component-generator.service';

@Component({
  selector: 'webapp-builder',
  templateUrl: './webapp-builder.component.html',
  styleUrls: ['./webapp-builder.component.css']
})
export class WebappBuilderComponent implements OnInit {

  constructor(private componentGenSvc:ComponentGeneratorService) { }

  private maxElementsAllowed = 50;
  private gridEmptyDivs = new Array(this.maxElementsAllowed);

  private draggedElement = "";

  private availableElements = [
    {label:'Textfield',available:true,metadata:'Textfield'},
    {label:'Button',available:true,metadata:'Button'},
    {label:'Table',available:false,metadata:'Table'},
    {label:'Time',available:false,metadata:'Time'},
    {label:'Dropdown',available:false,metadata:'Dropdown'},
    {label:'Divider',available:false,metadata:'Divider'},
  ];


  drop(ev) {
    ev.preventDefault();
    //var data = ev.dataTransfer.getData("text");
    //var nodeCopy = document.getElementById(data).cloneNode(true);
    
    var nodeCopy = this.componentGenSvc.metaDataMap[this.draggedElement];
    ev.target.innerHTML = nodeCopy;
    this.draggedElement = "";
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev,metaData) {
    this.draggedElement = metaData;
    //ev.dataTransfer.setData("text", ev.target.id);
  }

  ngOnInit() {
  }

}
