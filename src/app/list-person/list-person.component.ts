import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {

  arrPeople = [
    {name: 'Nguyen 1', age: 10},
    {name: 'Nguyen 2', age: 20},
    {name: 'Nguyen 3', age: 30}

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
