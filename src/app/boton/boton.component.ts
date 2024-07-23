import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrl: './boton.component.css'
})
export class BotonComponent {
  @Input() texto: string = 'Default Text';
  @Input() altura: string = '75px';
  @Input() fontsize: string = '48px';
  @Input() bcolor: string = '';
}
