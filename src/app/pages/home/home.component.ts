import { Component, OnInit } from '@angular/core';
import { CountryResponse } from 'src/app/intefaces/country-response';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public countriesAfrica: CountryResponse[] = [];
  public countriesAmerica: CountryResponse[] = [];
  public countriesAsia: CountryResponse[] = [];
  public countriesEuropa: CountryResponse[] = [];
  public countriesOceania: CountryResponse[] = [];

  public loadingAfrica: boolean = true;
  public loadingAmerica: boolean = true;
  public loadingAsia: boolean = true;
  public loadingEuropa: boolean = true;
  public loadingOceania: boolean = true;



  constructor( private countryService: CountryService ) {
    this.countryService.getContinent('Africa').subscribe( (resp) => {
      this.countriesAfrica = resp.sort(this.ordenar);
      this.loadingAfrica = false;
    }); 
    this.countryService.getContinent('Americas').subscribe( (resp) => {
      this.countriesAmerica = resp.sort(this.ordenar);
      this.loadingAmerica = false;
    }); 
    this.countryService.getContinent('Asia').subscribe( (resp) => {
      this.countriesAsia = resp.sort(this.ordenar);
      this.loadingAsia = false;
    }); 
    this.countryService.getContinent('Europe').subscribe( (resp) => {
      this.countriesEuropa = resp.sort(this.ordenar);
      this.loadingEuropa = false;
    }); 
    this.countryService.getContinent('Oceania').subscribe( (resp) => {
      this.countriesOceania = resp.sort(this.ordenar);
      this.loadingOceania = false;
    }); 
  }

  ngOnInit(): void {
  }

  ordenar(a: CountryResponse, b: CountryResponse){
    if (a.name.common > b.name.common ) {
      return 1;
    }
    if (a.name.common  < b.name.common ) {
      return -1;
    }
    // a must be equal to b
    return 0;
  }

}
