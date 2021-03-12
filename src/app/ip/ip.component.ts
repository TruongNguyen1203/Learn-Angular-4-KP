import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ip',
  templateUrl: './ip.component.html',
  styleUrls: ['./ip.component.css']
})
export class IpComponent implements OnInit {
  ip: Object | undefined;

  constructor(private http: HttpClient) {

    this.http.get('https://api.ipify.org/?format=json')
    .toPromise()
    .then(resJson => console.log(this.ip = resJson))
    .catch(err => console.log(err))
   }

  ngOnInit(): void {
  }



}
