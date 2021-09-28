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
      this.countries = resp;
      this.loading = false;
    }); 
  }


  addFavorite(){

  }

  ocultarPopUp(){
    console.log(this.ocultar);
    this.ocultar = false;
  }
            
}
