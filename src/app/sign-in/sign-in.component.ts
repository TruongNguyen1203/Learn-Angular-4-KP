import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }


  onSubmit(formSignIn:any){
    console.log(formSignIn.value);
    throw new Error("Form is invalid");
  }

}
