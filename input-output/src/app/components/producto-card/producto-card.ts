import { Component, Input , Output , EventEmitter} from '@angular/core';


interface Producto{
  nombre: string;
  precio: number;
  id: number;
}

@Component({
  selector: 'app-producto-card',
  imports: [],
  templateUrl: './producto-card.html',
  styleUrl: './producto-card.css',
})
export class ProductoCard {
  @Input() producto!: Producto;
@Output() eliminado = new EventEmitter<number>();
onEliminar(): void {
this.eliminado.emit(this.producto.id);
}

}
