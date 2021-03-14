import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {



  constructor(private http: HttpClient) {}

  getTemp(cityName: string){
    const url = 'http://api.openweathermap.org/data/2.5/find?q='+cityName+'&units=metric&appid=bec78ea69caaae2a1bc7a3faa4544d37';
    return this.http.get(url)
    .toPromise()
    .then((res:any) => res.list[0].main.temp)
  }
}
