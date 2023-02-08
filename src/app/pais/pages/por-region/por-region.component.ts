import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css'],
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `,
  ],
})
export class PorRegionComponent {
  hayError: boolean = false;
  paises: Country[] = [];
  regiones: string[] = ['eu', 'efta', 'caricom', 'pa', 'au', 'usan', 'eeu', 'al', 'asean', 'cais', 'cefta', 'nafta', 'saarc'];
  regionActiva: string = '';

  /**
   * Description
   * */
  constructor(private paisService: PaisService) {}

  /**
   * Description
   * @param {string} region
   * @returns {any}
   *  */
  activarRegion(region: string) {
    //Verificamos si la región seleccionada es la misma que se está recibiendo por parámetro, así nos evitamos hacer una llamada al servicio
    if( region === this.regionActiva ){ return; }

    this.regionActiva = region;
    //Limpiamos el array de paises.
    this.paises = [];
    //TODO: hacer llamado al servicio para buscar paises por región.
    this.paisService.buscarPorRegion(region).subscribe(
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
   * Description
   * @param {string} region
   * @returns {any}
   *  */
  getRegionCss(region: string): string {
    return region === this.regionActiva
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }
}
