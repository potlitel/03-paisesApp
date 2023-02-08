import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css'],
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class PorPaisComponent {
  //variable bindeada con el componente.html (se actualiza en ambas)
  termino           : string = '';
  hayError          : boolean = false;
  paises            : Country[] = [];
  paisesSugeridos   : Country[] = [];
  mostrarSugerencias: boolean = false;

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
    this.mostrarSugerencias = false;
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
    this.termino = terminoForSugerencias;
    this.mostrarSugerencias = true;
    //TODO crear sugerencias
    this.paisService.buscarPorPais(terminoForSugerencias).subscribe(
      (paises) => (this.paisesSugeridos = paises.splice(0, 8)), //splice para mostrar cierta cantidad y no la totalidad de los paises
      (err) => (this.paisesSugeridos = [])
    );
  }

  /**
   * Description: Función para buscar paises utilizando las sugerencias
   * @param {string} termino
   * @returns {any}
   *  */
  buscarSugerido(termino: string): void {
    this.buscar(termino);
  }
}
