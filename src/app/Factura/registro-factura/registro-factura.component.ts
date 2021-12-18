import { Factura } from 'src/app/Modelos/Factura';
import { Component, OnInit, Input  } from '@angular/core';
import { CargarScriptsService } from "./../../cargar-scripts.service";
import { Router } from '@angular/router';
import {CarritoService} from './../../Services/carrito.service';
import { Carrito } from 'src/app/Modelos/Carrito';
import { Total } from 'src/app/Modelos/total';
import {FacturaService} from './../../Services/factura.service';
@Component({
  selector: 'app-registro-factura',
  templateUrl: './registro-factura.component.html',
  styleUrls: ['../../../assets/CSS/Menu.css','../../../assets/CSS/registro.css']
})
export class RegistroFacturaComponent implements OnInit {
  total2: Total=new Total();
  y: number= 0;

   carrito: Carrito= new Carrito();
   ListarCarrito: Carrito[]=[];
   x:Carrito[]=[];
  constructor(private _CargaScripts: CargarScriptsService,private router: Router, private carritoService: CarritoService, private facturaService: FacturaService) {

    _CargaScripts.Carga(["jquery.min"]);
    _CargaScripts.Carga(["main"]);

   }



  ngOnInit(): void {
    this.y = Number(sessionStorage.getItem("total1"));
    this.factura.total = this.y;
    console.log(this.y);
    console.log("gym "+this.factura.total);

  }

  factura: Factura={
    id: '',
    cedula: 0,
    nombre: '',
    total:this.y
  };

  agregarFactura(f:Factura){
    this.facturaService.addFactura(f);
  }

  listarCarritos() {
    this.facturaService.addFactura(this.factura).subscribe();
    this.carritoService.getCarritos().subscribe((data: any) => {
      this.ListarCarrito = data.body;
      this.x = this.ListarCarrito;
      this.x.forEach((element) => {
        this.carritoService.deleteCarrito(element.id).subscribe();
        console.log(element.id);
      });
    });
    this.router.navigate(['/factura']);
  }

  eliminarCarrito(id: string) {
    this.carritoService.deleteCarrito(id).subscribe((data: any) => {
      this.carrito = data.body;
      return this.carrito.id;
    });
    window.location.reload();
 }



}
