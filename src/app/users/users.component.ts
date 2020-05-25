import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user : {name:string,age:number};
  private showSection = true;

  private users = [
    {name:"Chris",age:44},
    {name:"Ben",age:38},
    {name:"Leslie",age:40},
    {name:"Tom",age:29}
  ];
  
  constructor() { }

  ngOnInit() {
  }

  toggleSection(){
    this.showSection = !this.showSection;
  }

}
