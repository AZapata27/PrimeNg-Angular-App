import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'andrEs zapaTa';
  valor: number =  1000;
  obj = {
    nombre: 'Andrés',
    apellido: 'Zapata'
  };

  mostrarNombre(){
    console.log(this.nombre);
    console.log(this.valor);
    console.log(this.obj);
  }
}
