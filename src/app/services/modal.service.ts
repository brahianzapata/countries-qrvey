import { Injectable } from '@angular/core';
import { CountryResponse } from '../intefaces/country-response';
import { CountryService } from './country.service';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  public _ocultarModal: boolean = true;

  public countrySeleccionado: CountryResponse[] = [{
    "name": {
        "common": "Colombia",
        "official": "Republic of Colombia",
        "nativeName": {
            "spa": {
                "official": "República de Colombia",
                "common": "Colombia"
            }
        }
    },
    "tld": [
        ".co"
    ],
    "cca2": "CO",
    "ccn3": "170",
    "cca3": "COL",
    "cioc": "COL",
    "independent": true,
    "status": "officially-assigned",
    "unMember": true,
    "currencies": {
        "COP": {
            "name": "Colombian peso",
            "symbol": "$"
        }
    },
    "idd": {
        "root": "+5",
        "suffixes": [
            "7"
        ]
    },
    "capital": [
        "Bogotá"
    ],
    "altSpellings": [
        "CO",
        "Republic of Colombia",
        "República de Colombia"
    ],
    "region": "Americas",
    "subregion": "South America",
    "languages": {
        "spa": "Spanish"
    },
    "translations": {
        "ces": {
            "official": "Kolumbijská republika",
            "common": "Kolumbie"
        }
    },
    "latlng": [
        4.0,
        -72.0
    ],
    "landlocked": false,
    "borders": [
        "BRA",
        "ECU",
        "PAN",
        "PER",
        "VEN"
    ],
    "area": 1141748.0,
    "flag": "🇨🇴",
    "flags": [
        "https://restcountries.com/data/col.svg",
        "https://restcountries.com/data/png/col.png"
    ],
    "demonyms": {
        "eng": {
            "f": "Colombian",
            "m": "Colombian"
        },
        "fra": {
            "f": "Colombienne",
            "m": "Colombien"
        }
      }
  }];

  constructor( private countryService: CountryService) { 
  }

  get ocultarModal(){
    return this._ocultarModal;
  }

  public currency: string[] = [];
  public languages: string[] = [];
  public countriesNames: string[] = [];

  abrirModal(name: string){
    this.countryService.getcountry(name).subscribe( resp => {
      this.countrySeleccionado = resp || [];
      for (var key in this.countrySeleccionado[0].languages) {
        this.languages.push(this.countrySeleccionado[0].languages[key])
      }
      for (var key1 in this.countrySeleccionado[0].currencies) {
        for (var key2 in this.countrySeleccionado[0].currencies[key1]) {    
            this.currency.push(this.countrySeleccionado[0].currencies[key1][key2])
        }   
      }
      this._ocultarModal = false;
   });

  }

  cerrarModal(){
    this._ocultarModal = true;
  }

}
