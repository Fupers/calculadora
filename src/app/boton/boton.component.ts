import { Component, Input } from '@angular/core';
import { TextoService } from '../texto.service';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrl: './boton.component.css'
})
export class BotonComponent {

  @Input() texto: string = '';
  @Input() altura: string = '';
  @Input() fontsize: string = '';
  @Input() bcolor: string = '';

  constructor(private textoService: TextoService) {}

  clickboton(texto: string): void {
    this.textoService.changeText(texto);
  }
  
}
