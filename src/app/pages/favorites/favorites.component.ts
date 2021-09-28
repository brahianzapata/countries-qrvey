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
    this.countries = this.countryService.countriesLocalStorage;
    console.log(this.countries);
  }

  ngOnInit(): void {
  }

}
