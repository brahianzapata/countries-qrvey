import { ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CountryResponse } from 'src/app/intefaces/country-response';
import { CountryService } from 'src/app/services/country.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public countrySeleccionado: CountryResponse[] = [];

  public loading: boolean = true;

  constructor( private countryService: CountryService,
               public modalService: ModalService ) {
      this.countrySeleccionado = this.modalService.countrySeleccionado;
  }

  ngOnInit(): void {
  }

  ocultarPopUp(){
    this.modalService.cerrarModal();
  }

  addFavorite(country: CountryResponse){
    this.countryService.agregarFavorito(country);
  }

  removeFavorite(name: string){
    this.countryService.eliminarFavorito(name);
  }



}
