import { Component, OnInit} from '@angular/core';
import { CargarScriptsService } from "./../../cargar-scripts.service";
import { Carrito } from 'src/app/Modelos/Carrito';
import { CarritoService } from '../../Services/carrito.service';
import { Router } from '@angular/router';
import { Total } from 'src/app/Modelos/total';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

 //variable
 ListarCarrito: Carrito[]=[];
 carrito: Carrito= new Carrito();
 total: number;
 total1: Total=new Total();
 constructor( private _CargaScripts: CargarScriptsService, private carritoService: CarritoService, private router: Router) {

   _CargaScripts.Carga(["jquery.min"]);
   _CargaScripts.Carga(["main"]);
 }

 ngOnInit(): void {
   this.listarCarritos();
 }

 totalPago(){
  this.total = this.ListarCarrito.reduce((acc,obj,) => acc + (obj.precio * obj.cantidad),0);
  console.log("Total: ", this.total);
  this.total1.total = this.total;
  sessionStorage.setItem('total1', (this.total1.total+""));
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
    });
    window.location.reload();
 }

 agregarCarrito(c:Carrito) {
   this.carritoService.addCarrito(c);
 }

 modificar() {
   this.carritoService.editCarrito(this.carrito).subscribe();
   this.router.navigate(['/listaCarrito/']);
 }

}
