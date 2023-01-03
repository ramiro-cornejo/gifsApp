import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { BuscarComponent } from './buscar/buscar.component';
import { ResultadosComponent } from './resultados/resultados.component';



@NgModule({
  declarations: [
    GifsPageComponent,
    BuscarComponent,
    ResultadosComponent
  ],
  exports: [
    GifsPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
