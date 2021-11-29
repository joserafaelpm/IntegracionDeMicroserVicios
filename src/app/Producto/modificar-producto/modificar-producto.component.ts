import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from './../../cargar-scripts.service';
import { ProductoService } from 'src/app/Services/producto.service';
import { Producto } from '../../Modelos/Producto';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registrar-producto',
  templateUrl: './modificar-producto.component.html',
  styleUrls: [
    '../../../assets/CSS/Menu.css',
    '../../../assets/CSS/registro.css',
  ],
})
export class ModificarProductoComponent implements OnInit {
  constructor(
    private _CargaScripts: CargarScriptsService,
    private ProductoService: ProductoService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
    _CargaScripts.Carga(['jquery.min']);
    _CargaScripts.Carga(['main']);
  }

  producto: Producto = {
    id: '',
    nombre: '',
    descripcion: '',
    precio: '',
    cantidad: '',
    categoria: '',
  };

  ngOnInit(): void {
  /* const id_entrada = <string>this.activateRoute.snapshot.params.id;
    console.log('ide de entrada: ' + id_entrada);

    if (id_entrada) {
      this.ProductoService.getProducto(id_entrada).subscribe((data: any) => {
        this.producto = data.body[0];
        console.log(this.producto);
      });*/
    }


  modificar() {
    this.ProductoService.editProducto(this.producto).subscribe();
    this.router.navigate(['/listaProducto']);
    /*this.ProductoService.editProducto(this.producto);
    console.log(this.producto);
    this.router.navigate(['/listaProducto']);*/
  }
}
