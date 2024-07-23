import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { BotonComponent } from './boton/boton.component';
import { PantallaComponent } from './pantalla/pantalla.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    BotonComponent,
    PantallaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
