import { Component} from '@angular/core';



interface Alumno {
  nombre: string;
  edad: number;
  aprobado: boolean;
}

@Component({
  selector: 'app-producto',
  imports: [],
  templateUrl: './producto.html',
  styleUrl: './producto.css',
})
export class Producto {
   
}
