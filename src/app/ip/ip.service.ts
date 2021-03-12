import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IpService {
  ipJson!: Object;

  constructor(private http: HttpClient) { }
  getIp(){
    return this.http.get('https://api.ipify.org/?format=json')
    .toPromise()
    .then(resJson => this.ipJson = resJson)
  }
}
