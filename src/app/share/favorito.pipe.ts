import { Pipe, PipeTransform } from '@angular/core';
import { CountryService } from '../services/country.service';

@Pipe({
  name: 'favorito',
  pure: false
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
