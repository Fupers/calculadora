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
      console.log(this.texto);
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

  suma(): void {

  }

  resta(): void {

  }

  multiplicacion(): void {

  }

  division(): void {

  }

  porcentaje(): void {

  }

  resultadoOperacion(): void {

  }

  procesoCalculadora(): void {

    if (!isNaN(Number(this.temp))) {
      this.updateTexto();
    } else {
      if (this.temp === 'AC'){
        this.eliminarTodo();
      }
      if (this.temp === 'C'){
        this.eliminarUltimo();
      }
    }

  }
}
