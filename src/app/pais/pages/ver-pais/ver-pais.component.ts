import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css'],
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  /**
   * Description
   * @param {ActivatedRoute} activateRoute
   * @param {PaisService} paisService
   *  */
  constructor(
    private activateRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}
  /**
   * Description
   * @returns {any}
   * */
  ngOnInit(): void {
    
    this.activateRoute.params
      .pipe(
        switchMap( ({ id }) => this.paisService.buscarPorCodigo( id ) ),
        tap( resp => {
            console.log(resp)
        } )
      )
      .subscribe( resp => this.pais = resp);
    
    // this.activateRoute.params.subscribe(({ id }) => {
    //   console.log(id);
    //   this.paisService.buscarPorCodigo( id ).subscribe( pais => {
    //     console.log(pais);
    //   } ) 
    // });
  }
}
