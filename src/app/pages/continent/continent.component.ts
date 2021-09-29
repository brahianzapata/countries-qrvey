import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryResponse } from 'src/app/intefaces/country-response';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-continent',
  templateUrl: './continent.component.html',
  styleUrls: ['./continent.component.css']
})
export class ContinentComponent implements OnInit {

  public text: string = '';
  public countries: CountryResponse[] = [];
  public loading: boolean = true;
  public ocultar: boolean = false;


  constructor(private activatedRoute: ActivatedRoute,
              private countryService: CountryService) {
      this.activatedRoute.params.subscribe( params => {
        this.text = params.name ==='America' ? 'Americas': params.name;
        this.buscarContinent(this.text);
      });
  }

  ngOnInit(): void {}
  
  buscarContinent( texto: string){
    this.countryService.getContinent(texto).subscribe( (resp) => {
      this.countries = resp.sort(this.ordenar);
      this.loading = false;
    }); 
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
