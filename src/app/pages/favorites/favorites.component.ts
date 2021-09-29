import { Component, OnInit } from '@angular/core';
import { CountryResponse } from 'src/app/intefaces/country-response';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  public text: string = '';
  public countries: CountryResponse[] = [];

  constructor(private countryService: CountryService) { 
    this.countries = this.countryService.countriesLocalStorage.sort(this.ordenar);
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
