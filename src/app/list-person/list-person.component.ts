import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {

  arrPeople = [
    {name: 'A', age: 10},
    {name: 'B', age: 20},
    {name: 'C', age: 30}

  ]
  constructor() { }

  ngOnInit(): void {
  }

  removePersonByName(name: string){
   const index =  this.arrPeople.findIndex(n => n.name === name);
   this.arrPeople.splice(index, 1);
  }

}
