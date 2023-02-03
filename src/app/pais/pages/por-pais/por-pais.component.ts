import { Component } from '@angular/core';
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

  constructor( private paisService:PaisService ){}
  
  buscar() {
    // console.log(this.termino);
    this.hayError = false;
    this.paisService.buscarPais( this.termino ).subscribe(
       (resp) => {
        console.log(resp);
    }, (err) =>{
        console.log('Error');
        console.log(err);
        this.hayError = true;
    } );
  }
}
