import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContinentComponent } from './pages/continent/continent.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { HomeComponent } from './pages/home/home.component';
import { NoFoundComponent } from './pages/no-found/no-found.component';
import { SearchCountryComponent } from './pages/search-country/search-country.component';

const routes : Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'favorites',
    component: FavoritesComponent
  },
  {
    path: 'no-found',
    component: NoFoundComponent
  },
  {
    path: 'continent/:name',
    component: ContinentComponent
  },
  {
    path: 'search/:name',
    component: SearchCountryComponent
  },
  { 
    path: '', 
    redirectTo: '/home', 
    pathMatch: 'full' 
  },
  { 
    path: '**', 
    redirectTo: '/no-found'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
