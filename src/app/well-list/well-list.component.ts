import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'well-list',
  templateUrl: './well-list.component.html',
  styleUrls: ['./well-list.component.css']
})
export class WellListComponent implements OnInit {

  constructor() { }
  private sourceKeyMap = [
    "1001",
    "1001001",
    "1001001001"
  ];

  private wellsData = [
    {name:"Well One",type:"common",sourceKey: this.sourceKeyMap[0]},
    {name:"Well Two",type:"special",sourceKey: this.sourceKeyMap[1]},
    {name:"Well Three",type:"special",sourceKey: this.sourceKeyMap[0]},
    {name:"Well Four",type:"common",sourceKey: this.sourceKeyMap[2]}
  ];

  ngOnInit() {
  }

  addWellToList(newWellData){
    
    this.wellsData.push({
      name:newWellData.newWellName,
      type:newWellData.newWellType,
      sourceKey:newWellData.newWellSourceKey
    });
  }

}
