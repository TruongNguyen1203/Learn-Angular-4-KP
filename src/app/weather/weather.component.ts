import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  txtCityName= '';
  cityName = '';
  temp ='';



  constructor(private weatherService: WeatherService) { }

  getWeather(){
    this.weatherService.getTemp(this.txtCityName)
    .then(temp =>{
        this.cityName = this.txtCityName;
        this.temp = temp;
        this.txtCityName='';
    })
    .catch(err => {
      alert("Can not find your city");
      this.cityName='';
      this.txtCityName='';
    });
  }

  getMessage(){
    return this.cityName === '' ? 'Enter your city': (this.cityName + ' now is: ' + this.temp);
  }


  ngOnInit(): void {}

}
