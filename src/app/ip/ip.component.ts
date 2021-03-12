import { Component, OnInit } from '@angular/core';
import { IpService } from './ip.service';

@Component({
  selector: 'app-ip',
  templateUrl: './ip.component.html',
  styleUrls: ['./ip.component.css']
})
export class IpComponent implements OnInit {
  ip: Object | undefined;

  constructor(private ipService: IpService) {}


  ngOnInit(): void {
    this.ipService.getIp()
    .then(res => this.ip = res);

  }



}
