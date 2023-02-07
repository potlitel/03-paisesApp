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
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  /**
   * Description: Constructor de la clase
   * @param {PaisService} privatepaisService
   **/
  constructor(private paisService: PaisService) {}

  /**
   * Description: Function para buscar por paises usando servicio de paises
   * @param {string} terminoFromInputComponent
   * @returns {void}
   *  */
  buscar(terminoFromInputComponent: string): void {
    // console.log(this.termino);
    this.hayError = false;
    this.termino = terminoFromInputComponent;
    this.paisService.buscarPorPais(this.termino).subscribe(
      (paises) => {
        console.log(paises);
        this.paises = paises;
      },
      (err) => {
        console.log('Error');
        console.log(err);
        this.hayError = true;
        this.paises = [];
      }
    );
  }

  /**
   * Description: Función para mostrar sugerencias en la caja de texto del component app-pais-input
   * @param {string} terminoForSugerencias
   * @returns {any}
   *  */
  sugerencias(terminoForSugerencias: string): void {
    this.hayError = false;
    //TODO crear sugerencias
  }
}
