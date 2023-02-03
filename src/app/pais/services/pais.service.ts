import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  // constante apiUrl para manejar la dirección del servicio
  private apiUrl: string = 'https://restcountries.com/v2';
  /*
   * Constructor for Emp class
   */
  constructor(private httpClient: HttpClient) {}
  /**
   * Función para buscar paises (by name) dentro del servicio de paises.
   * @author potlitel@gmail.com
   * @version 1.0.0
   * @return {Observable} Return a observable
   **/
  buscarPais(termino: string): Observable<Country[]> {
    const url = ` ${this.apiUrl}/name/${termino} `;
    return this.httpClient.get<Country[]>(url);
          // .pipe(
          //     catchError( err => of(['Hola mundo']) )
          // );
  }
}
