import { Component, Input, OnInit } from '@angular/core';
import { TextoService } from '../texto.service';

@Component({
  selector: 'app-pantalla',
  templateUrl: './pantalla.component.html',
  styleUrl: './pantalla.component.css'
})

export class PantallaComponent implements OnInit {

  @Input() texto: string = '0';
  temp: string = ''; //Variable temporal
  temp2: string = '';
  operacion: string = '';
  reinicio: boolean = false;

  constructor(private textoService: TextoService) {}

  ngOnInit(): void {
    this.textoService.currentText.subscribe(text => {
      this.temp = text;
      this.procesoCalculadora();
    });
  }

  updateTexto(): void {
    if (this.texto.length < 8) {
      if (this.texto == '0') {
        this.texto = this.temp;
      } else {
        this.texto = this.texto + this.temp;
      }
    }
  }

  eliminarTodo(): void {
    this.texto = '0';
  }

  eliminarUltimo(): void {
    if(Number(this.texto) !== 0){
      this.texto = this.texto.slice(0, -1);
    }
    if(this.texto.length === 0){
      this.texto = '0';
    }
  }

  transicion(): void {
    this.temp2 = this.texto;
    this.texto = '';
    this.operacion = this.temp;
  }

  suma(): void {
    this.texto = String((Number(this.temp2))+(Number(this.texto)));
  }

  resta(): void {
    this.texto = String((Number(this.temp2))-(Number(this.texto)));
  }

  multiplicacion(): void {
    this.texto = String((Number(this.temp2))*(Number(this.texto)));
  }

  division(): void {
    this.temp2 = String((Number(this.temp2))/(Number(this.texto)));

    if (isFinite(Number(this.temp2)) == false) {
      this.temp2 = String(Number(this.temp2).toFixed(10));
    }
    
    if (this.temp2.length > 8) {
      this.temp2 = this.temp2.slice(0, -(this.temp2.length - 8));
    }

    console.log(this.temp2);

    this.texto = this.temp2;
  }

  porcentaje(): void {
    this.texto = String((Number(this.texto))*100);
  }

  resultadoOperacion(): void {
    if (this.operacion === '+') {
      this.suma();
    }
    if (this.operacion === '-') {
      this.resta();
    }
    if (this.operacion === '/') {
      this.division();
    }
    if (this.operacion === 'X') {
      this.multiplicacion();
    }
  }

  procesoCalculadora(): void {
    if (this.reinicio == true) {
      this.texto = '0';
      this.reinicio = false;
    }

    if (!isNaN(Number(this.temp))) {
      this.updateTexto();
    } else {
      if (this.temp === 'AC') {
        this.eliminarTodo();
      }
      if (this.temp === 'C') {
        this.eliminarUltimo();
      }
      if (this.temp === '%') {
        this.porcentaje();
      }
      if (this.temp === '=') {
        this.resultadoOperacion();
        this.reinicio = true;
      }
      if ((this.temp === '+') || (this.temp === '-') || (this.temp === 'X') || (this.temp === '/')) {
        this.transicion();
      }
    }

  }
}
