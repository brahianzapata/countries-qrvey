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
  @Input() titulo: string = '';

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
  public loading: boolean = true;
  public ocultar: boolean = false;

  constructor( private countryService: CountryService ) {
  }

  ngOnInit(): void {
  }

  addFavorite(country: CountryResponse){
    console.log(country);
    this.countryService.agregarFavorito(country);
  }

  removeFavorite(country: CountryResponse){
    console.log(country);
  }


  ocultarPopUp(){
    console.log(this.ocultar);
    this.ocultar = false;
  }

  mostrarPopUp(name: string){
    console.log(this.ocultar);
    this.ocultar = true;
    this.countryService.getcountry(name).subscribe( resp => {
      this.countrySeleccionado = resp;
      console.log(this.countrySeleccionado);
      this.ocultar = true;
    });
  }

}
