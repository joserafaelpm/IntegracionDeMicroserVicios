import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from "./../../cargar-scripts.service";
import { Factura } from 'src/app/Modelos/Factura';
import { FacturaService } from 'src/app/Services/factura.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['../../../assets/CSS/Menu.css','../../../assets/CSS/registro.css']
})
export class UsuarioComponent implements OnInit {


  constructor( private _CargaScripts: CargarScriptsService) {

    _CargaScripts.Carga(["jquery.min"]);
    _CargaScripts.Carga(["main"]);
  }

  ngOnInit(): void {
  }

}
