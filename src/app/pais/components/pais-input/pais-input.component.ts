import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent {
  
  @Output() onEnter: EventEmitter<string> = new EventEmitter();

  //variable bindeada con el componente.html (se actualiza en ambas)
  termino : string = '';

  emiteTerminoFromInput(){
    this.onEnter.emit( this.termino );
  }
}
