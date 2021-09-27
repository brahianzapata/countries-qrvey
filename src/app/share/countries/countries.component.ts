import { Component, Input, OnInit } from '@angular/core';
import { CountryResponse } from 'src/app/intefaces/country-response';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  @Input() countries: CountryResponse[] = [];
  public loading: boolean = true;

  constructor( private countryService: CountryService ) {
    console.log(this.countries);
  }

  ngOnInit(): void {
  }

}
