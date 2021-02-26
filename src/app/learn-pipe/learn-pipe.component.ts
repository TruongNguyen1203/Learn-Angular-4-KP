import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-pipe',
  templateUrl: './learn-pipe.component.html',
  styleUrls: ['./learn-pipe.component.css']
})
export class LearnPipeComponent implements OnInit {

  birthday = new Date(2000, 3, 12);
  person ={name :'Truong Nguyen', age:21};
  address = Promise.resolve('Binh Duong');
  constructor() { }

  ngOnInit(): void {
  }

}
