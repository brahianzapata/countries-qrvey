import { Pipe, PipeTransform } from '@angular/core';
import { CountryService } from '../services/country.service';

@Pipe({
  name: 'favorite',
  pure: false
})
export class FavoritePipe implements PipeTransform {

  constructor(private countryService: CountryService){
    console.log('pipe constructor');
  }

  transform(value: string): boolean {
    if (this.countryService.buscarFavorito(value) === undefined){
      console.log(value);
      return false;
    }else{
      console.log(value);
      return true;
    }  
  }

}
