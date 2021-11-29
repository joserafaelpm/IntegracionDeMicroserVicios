import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from "./../../cargar-scripts.service";

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
