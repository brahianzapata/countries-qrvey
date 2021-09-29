import { Component, Input, OnInit } from '@angular/core';
import { CountryResponse } from 'src/app/intefaces/country-response';
import { CountryService } from 'src/app/services/country.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  @Input() countries: CountryResponse[] = [];
  @Input() titulo: string = '';

  
  public loading: boolean = true;

  constructor( private countryService: CountryService,
               private modalService: ModalService ) {
  }

  ngOnInit(): void {
  }

  addFavorite(country: CountryResponse){
    console.log(country);
    this.countryService.agregarFavorito(country);
  }

  removeFavorite(name: string){
    this.countryService.eliminarFavorito(name);
  }

  mostrarPopUp(name: string){
    this.modalService.abrirModal(name);
  }



}
