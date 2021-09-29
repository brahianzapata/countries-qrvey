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

  abrirModal(name: string){
    this.countryService.getcountry(name).subscribe( resp => {
      this.countrySeleccionado = resp || [];
      this._ocultarModal = false;
   });

  }

  cerrarModal(){
    this._ocultarModal = true;
  }

}
