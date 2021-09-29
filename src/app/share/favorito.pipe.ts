import { Pipe, PipeTransform } from '@angular/core';
import { CountryService } from '../services/country.service';

@Pipe({
  name: 'favorito'
})
export class FavoritoPipe implements PipeTransform {

  constructor(private countryService: CountryService){
  }

  transform(value: string): boolean {
    if (this.countryService.buscarFavorito(value) === undefined){
      return false;
    }else{
      return true;
    }  
  }

}
