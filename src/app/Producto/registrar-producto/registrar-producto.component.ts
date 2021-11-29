import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from "./../../cargar-scripts.service";
import { ProductoService} from 'src/app/Services/producto.service';
import { Producto} from '../../Modelos/Producto';
import {Router} from '@angular/router';
@Component({
  selector: 'app-registrar-producto',
  templateUrl: './registrar-producto.component.html',
  styleUrls: ['../../../assets/CSS/Menu.css','../../../assets/CSS/registro.css']
})
export class RegistrarProductoComponent implements OnInit {
  constructor( private _CargaScripts: CargarScriptsService, private ProductoService:ProductoService, private router: Router) {

    _CargaScripts.Carga(["jquery.min"]);
    _CargaScripts.Carga(["main"]);
  }

  producto: Producto={
    id: '',
    nombre: '',
    descripcion: '',
    precio: '',
    cantidad: '',
    categoria: '',
  };

  ngOnInit(): void {
  }

  agregarProducto(){
    this.ProductoService.addProducto(this.producto).subscribe();
    this.router.navigate(['/listaProducto']);
  }


}
