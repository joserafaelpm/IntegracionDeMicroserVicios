import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from "./../../cargar-scripts.service";
//  declare function iniciar(): any;
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['../../../assets/CSS/Menu.css']
})
export class PrincipalComponent implements OnInit {

  constructor( private _CargaScripts: CargarScriptsService) {

    _CargaScripts.Carga(["apis"]);
    _CargaScripts.Carga(["jquery.min"]);
    _CargaScripts.Carga(["main"]);
  }

  ngOnInit() {
    // iniciar();
  }

}
