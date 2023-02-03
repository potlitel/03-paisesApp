import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css'],
})
export class PorPaisComponent {
  //variable bindeada con el componente.html (se actualiza en ambas)
  termino : string = '';
  hayError: boolean = false;
  paises  : Country[] = [];

  constructor( private paisService:PaisService ){}
  
  buscar() {
    // console.log(this.termino);
    this.hayError = false;
    this.paisService.buscarPais( this.termino ).subscribe(
       (paises) => {
        console.log(paises);
        this.paises = paises;
    }, (err) =>{
        console.log('Error');
        console.log(err);
        this.hayError = true;
        this.paises = [];
    } );
  }
}
