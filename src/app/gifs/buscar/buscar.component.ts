import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  buscar() {
    
    const valor = this.txtBuscar.nativeElement.value;
    
    console.log(valor);

    this.txtBuscar.nativeElement.value = '';
  }
}
