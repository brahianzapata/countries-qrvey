import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesComponent } from './countries/countries.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
import { DetailComponent } from './detail/detail.component';
import { FavoritoPipe } from './favorito.pipe';



@NgModule({
  declarations: [
    CountriesComponent,
    MenuComponent,
    DetailComponent,
    FavoritoPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MenuComponent,
    CountriesComponent,
    DetailComponent
  ]
})
export class ShareModule { }
