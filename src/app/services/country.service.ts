import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { CountryResponse } from '../intefaces/country-response';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  
  private baseUrl: string = 'https://restcountries.com/v3';

  public countries: CountryResponse[] = [];
  public countriesLocalStorage: CountryResponse[] = [];

  constructor( private http: HttpClient ) { 
    this.getContinent('Africa').subscribe( (resp) => {
      this.countries = resp;
    }); 
    this.cargarFavoritos();
  }

  getCountries( ): Observable<CountryResponse[]>{
    return this.http.get<CountryResponse[]>(`${ this.baseUrl }/all`);
  }

  getcountry( country: string){
    return this.http.get<CountryResponse[]>(`${ this.baseUrl }/name/${country}`);
  }

  getContinent( continent: String){
    return this.http.get<CountryResponse[]>(`${ this.baseUrl }/region/${continent}`);
  }

  /* Favoritos */ 

  cargarFavoritos(): void{
    if (localStorage.getItem('favoritesCountries')){
      this.countriesLocalStorage = JSON.parse(localStorage.getItem('favoritesCountries')  || '{}');
    }else{
      this.countriesLocalStorage = [];
    }
  }

  agregarFavorito( country: CountryResponse): void{
    this.countriesLocalStorage.push(country);
    this.guardarLocalStorage();
  }

  eliminarFavorito( name: string): void{
    this.countriesLocalStorage = this.countriesLocalStorage.filter( (country: CountryResponse) => country.name.common !== name);
    this.guardarLocalStorage();
  }

  guardarLocalStorage(): void{
    localStorage.setItem('favoritesCountries', JSON.stringify(this.countriesLocalStorage));
    this.cargarFavoritos();
  }

  buscarFavorito(name: string ): CountryResponse {
    return this.countriesLocalStorage.filter( (country: CountryResponse) =>  country.name.common === name)[0];
  }

  
}
