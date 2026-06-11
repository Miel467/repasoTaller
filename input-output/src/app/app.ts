import { Component } from '@angular/core';
import { ProductoCard, Producto} from './components/producto-card/producto-card'

@Component({
  selector: 'app-root',
  imports: [ProductoCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppAlumno {
  productos: Producto[] = [
{ id:1, nombre:'Teclado', precio:8500 },
{ id:2, nombre:'Mouse', precio:3200 },
];
onEliminado(id: number): void {
this.productos = this.productos.filter(p => p.id !== id);
}

}




