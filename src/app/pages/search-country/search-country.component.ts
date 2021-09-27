import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryResponse } from 'src/app/intefaces/country-response';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-search-country',
  templateUrl: './search-country.component.html',
  styleUrls: ['./search-country.component.css']
})
export class SearchCountryComponent implements OnInit {


  public text: string = '';
  public countries: CountryResponse[] = [];
  public loading: boolean = true;

  constructor(private activatedRoute: ActivatedRoute,
              private countryService: CountryService) 
  {
    this.activatedRoute.params.subscribe( params => {
      this.text = params.name;
      this.buscarCountry(this.text);
    });
  }

  ngOnInit(): void {}

  buscarCountry( texto: string){
    this.countryService.getcountry(texto).subscribe( resp =>{
      this.countries = resp
      this.loading = false;
    });
  }

}
