import { Component, OnInit } from '@angular/core';

import { CargarScriptsService } from "./../../cargar-scripts.service";

@Component({
  selector: 'app-mostrar-usuarios',
  templateUrl: './mostrar-usuarios.component.html',
  styleUrls: ['../../../assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css', '../../../assets/CSS/Menu.css',
  '../../../assets/CSS/Util.css','../../../assets/vendor/perfect-scrollbar/perfect-scrollbar.css',
  '../../../assets/vendor/select2/select2.min.css','../../../assets/vendor/animate/animate.css','../../../assets/vendor/bootstrap/css/bootstrap.min.css']
})
export class MostrarUsuariosComponent implements OnInit {

  constructor( private _CargaScripts: CargarScriptsService) {

    _CargaScripts.Carga(["jquery.min"]);
    _CargaScripts.Carga(["main"]);
  }

  ngOnInit(): void {
  }

}
