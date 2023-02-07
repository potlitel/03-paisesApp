import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {

  ngOnInit(): void {
    this.debouncer
    .pipe( debounceTime( 300 ) )
    .subscribe( valor => {
      // console.log('debouncer:', valor);
      this.onDebounce.emit( valor );
    } );
  }
  
  @Input() placeHolder: string = '';
  @Output() onEnter   : EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  //variable bindeada con el componente.html (se actualiza en ambas)
  termino : string = '';

  emiteTerminoFromInput(){
    this.onEnter.emit( this.termino );
  }

  teclaPresionada( event:any ):void{
      // const valor = event.target.value;
      // console.log( valor );
      // console.log( this.termino );
      //Pudiera usar la variable 'valor' en la llamada siguiente...
      this.debouncer.next( this.termino );
  }
}

