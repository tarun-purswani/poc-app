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
    
    //If we want element to element copy, following would have been the code
    //var data = ev.dataTransfer.getData("text");
    //var nodeCopy = document.getElementById(data).cloneNode(true);
    
    // But since we are dragging from a list of names of html components,
    // we just need to capture type of element needed
    var nodeCopy = this.componentGenSvc.metaDataMap[this.draggedElement];
    ev.target.innerHTML = nodeCopy;
    this.draggedElement = "";
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev,metaData) {
    this.draggedElement = metaData;

    // in case of element-to-element copy creation,
    // we will take id of element with help of method ev.dataTransfer.setData to copy the node,
    // and THEN append it wherever it is dropped by user, using the ev.dataTransfer.getData method, which will be part of drop operation

    //ev.dataTransfer.setData("text", ev.target.id);
  }

  ngOnInit() {
  }

}
