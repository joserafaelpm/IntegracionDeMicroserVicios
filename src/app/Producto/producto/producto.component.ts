import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from "./../../cargar-scripts.service";
import { Producto } from 'src/app/Modelos/Producto';
import { Carrito } from 'src/app/Modelos/Carrito';
import { ProductoService } from 'src/app/Services/producto.service';
import { Router } from '@angular/router';
import {CarritoService} from 'src/app/Services/carrito.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['../../../assets/CSS/Menu.css','../../../assets/CSS/registro.css']
})
export class ProductoComponent implements OnInit {

  //variable
  ListarProducto: Producto[]=[];
  producto: Producto= new Producto();
  carrito: Carrito= new Carrito();
  constructor( private _CargaScripts: CargarScriptsService, private ProductoService: ProductoService, private CarritoService: CarritoService, private router: Router) {

    _CargaScripts.Carga(["jquery.min"]);
    _CargaScripts.Carga(["main"]);
  }

  ngOnInit(): void {
    this.listarProductos();
  }

  listarProductos() {
    this.ProductoService.getProductos().subscribe((data: any) => {
      this.ListarProducto = data.body;
      console.log(this.ListarProducto);
    });
  }

  buscarProducto(id: string) {
    this.ProductoService.getProducto(id).subscribe((data: any) => {
      this.producto = data.body;
      console.log(this.producto);
    });
  }

  agregarCarrito(p: Producto){
    this.carrito.nombre = p.nombre;
    this.carrito.precio = p.precio;
    this.carrito.cantidad = p.cantidad;
    console.log(this.carrito);
    this.CarritoService.addCarrito(this.carrito).subscribe((data: any) => {
      console.log("Envie producto");
    });
  }

  eliminarProducto(id: string) {
     this.ProductoService.deleteProducto(id).subscribe((data: any) => {
       this.producto = data.body;
       return this.producto.id;
     });
     window.location.reload();
  }

  agregarProducto(p:Producto) {
    this.ProductoService.addProducto(p);
  }

  modificar() {
    this.ProductoService.editProducto(this.producto).subscribe();
    this.router.navigate(['/listaProducto/']);
  }
}
