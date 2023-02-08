import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  // constante apiUrl para manejar la dirección del servicio
  private apiUrl: string = 'https://restcountries.com/v2';

  get httParams(): HttpParams{
    return new HttpParams()
          .set('fields','name,capital,alpha2Code,flag,population');
  }

  /**
   * Description
   * @param {HttpClient} httpClient
   *  */
  constructor(private httpClient: HttpClient) {}
  /**
   * Función para buscar paises (by name) dentro del servicio de paises.
   * @param {string} termino
   * @returns {Observable<Country[]>}
   *  */
  buscarPorPais(termino: string): Observable<Country[]> {
    const url = ` ${this.apiUrl}/name/${termino}`;
    return this.httpClient.get<Country[]>( url, { params: this.httParams } );
    // .pipe(
    //     catchError( err => of(['Hola mundo']) )
    // );
  }

  /**
   * Description Función para buscar paises (by capital) dentro del servicio de paises.
   * @param {string} termino
   * @returns {Observable<Country[]>}
   *  */
  buscarPorCapital(termino: string): Observable<Country[]> {
    const url = ` ${this.apiUrl}/capital/${termino}`;
    return this.httpClient.get<Country[]>( url, { params: this.httParams } );
  }

  /**
   * Description Función para buscar paises (by code) dentro del servicio de paises.
   * @param {string} id: Código de país.
   * @returns {any}
   *  */
  buscarPorCodigo(id: string): Observable<Country> {
    const url = ` ${this.apiUrl}/alpha/${id} `;
    return this.httpClient.get<Country>(url);
  }

  /**
   * Description Función para buscar paises (by regional bloc) dentro del servicio de paises.
   * @param {string} region
   * @returns {any}
   *  */
  buscarPorRegion(region: string): Observable<Country[]> {
    const url = ` ${this.apiUrl}/regionalbloc/${region}`;
    return this.httpClient.get<Country[]>(url, { params: this.httParams });
  }
}
