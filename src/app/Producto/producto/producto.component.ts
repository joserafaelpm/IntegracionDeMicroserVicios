import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from "./../../cargar-scripts.service";
import { Producto } from 'src/app/Modelos/Producto';
import { ProductoService } from 'src/app/Services/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['../../../assets/CSS/Menu.css','../../../assets/CSS/registro.css']
})
export class ProductoComponent implements OnInit {

  //variable
  ListarProducto: Producto[]=[];
  producto: Producto= new Producto();
  constructor( private _CargaScripts: CargarScriptsService, private ProductoService: ProductoService, private router: Router) {

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

  eliminarProducto(id: string) {
     this.ProductoService.deleteProducto(id).subscribe((data: any) => {
       this.producto = data.body;
       return this.producto.id;
     })
  }

  agregarProducto(p:Producto) {
    this.ProductoService.addProducto(p);
  }

  modificar() {
    this.ProductoService.editProducto(this.producto).subscribe();
    this.router.navigate(['/listaProducto/']);
  }
}
