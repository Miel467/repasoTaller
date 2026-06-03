
import { Component, signal } from '@angular/core';
import {FormsModule} from '@angular/forms';


interface Producto{
  id:number;
  nombre:string;
  precio:number;
}


@Component({
  selector: 'app-root',
  imports: [ FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  busqueda: string = '';
  usuarioLogueado:boolean=false;
  
categorias:string="electronica";


 iniciarSesion(){
   this.usuarioLogueado=true;
 }
cerrarSesion(){
   this.usuarioLogueado=false;
 }



 productos:Producto[]=[
{id:1,nombre:"Papa",precio:150},
{id:2,nombre:"Tomate",precio:100},
{id:3,nombre:"Cebolla",precio:500},
{id:4,nombre:"Lechuga",precio:80}
]

vaciarlista(){
  this.productos=[];
}


get productosFiltrados():Producto[]{
  if(!this.busqueda.trim()){
    return this.productos;
 }
return this.productos.filter(producto => producto.nombre.toLowerCase().includes(this.busqueda.toLowerCase()));
}






}