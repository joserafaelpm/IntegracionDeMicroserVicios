import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from "./../../cargar-scripts.service";
import { Carrito } from 'src/app/Modelos/Carrito';
import { CarritoService } from '../../Services/carrito.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

 //variable
 ListarCarrito: Carrito[]=[];
 carrito: Carrito= new Carrito();
 constructor( private _CargaScripts: CargarScriptsService, private carritoService: CarritoService, private router: Router) {

   _CargaScripts.Carga(["jquery.min"]);
   _CargaScripts.Carga(["main"]);
 }

 ngOnInit(): void {
   this.listarCarritos();
 }

 listarCarritos() {
   this.carritoService.getCarritos().subscribe((data: any) => {
     this.ListarCarrito = data.body;
     console.log(this.ListarCarrito);
   });
 }

 buscarCarrito(id: string) {
   this.carritoService.getCarrito(id).subscribe((data: any) => {
     this.carrito = data.body;
     console.log(this.carrito);
   });
 }

 eliminarCarrito(id: string) {
    this.carritoService.deleteCarrito(id).subscribe((data: any) => {
      this.carrito = data.body;
      return this.carrito.id;
    })
 }

 agregarCarrito(c:Carrito) {
   this.carritoService.addCarrito(c);
 }

 modificar() {
   this.carritoService.editCarrito(this.carrito).subscribe();
   this.router.navigate(['/listaCarrito/']);
 }

}
