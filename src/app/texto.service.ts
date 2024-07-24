import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TextoService {
  private textSource = new BehaviorSubject<string>('0');
  currentText = this.textSource.asObservable();

  changeText(text: string) {
    this.textSource.next(text);
  }
}

