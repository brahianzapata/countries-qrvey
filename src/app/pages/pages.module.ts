import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ContinentComponent } from './continent/continent.component';
import { SearchCountryComponent } from './search-country/search-country.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { NoFoundComponent } from './no-found/no-found.component';
import { ShareModule } from '../share/share.module';



@NgModule({
  declarations: [
    ContinentComponent,
    SearchCountryComponent,
    FavoritesComponent,
    NoFoundComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ShareModule,
  ]
})
export class PagesModule { }
