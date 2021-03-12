import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IpService } from './ip.service';

@Component({
  selector: 'app-ip',
  templateUrl: './ip.component.html',
  styleUrls: ['./ip.component.css']
})
export class IpComponent implements OnInit {
  ip: Object | undefined;

  constructor(private ipService: IpService) {
    this.ipService.getIp()
    .then(res => this.ip = res);


   }

  ngOnInit(): void {
  }



}
