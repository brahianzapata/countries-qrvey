import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  datos : string[];

  constructor( private router: Router){
    this.datos = ['ShowAll', 'Favorites', 'Africa', 'America', 'Asia', 'Europe', 'Oceania'];
  }
  ngOnInit(): void {
  }

  // Seleccionamos o iniciamos el valor '0' del <select>
  opcionSeleccionado: string  = '0';
  verSeleccion: string        = '';

  capturar() {
      // Pasamos el valor seleccionado a la variable verSeleccion
      this.verSeleccion = this.opcionSeleccionado;
      if( this.verSeleccion === 'ShowAll'){
        this.router.navigate([`/home`]); 
        return;
      }
      else if( this.verSeleccion === 'Favorites'){
        this.router.navigate([`/favorites`]);
        return;
      }else{
        this.router.navigate([`/continent`, this.verSeleccion]);
        return;
      }
  }

  buscarCountry(textBuscar : string ){

    textBuscar = textBuscar.trim();

    if( textBuscar.length === 0 ){
      return;
    }

    this.router.navigate(['/search', textBuscar]);

  }

}
