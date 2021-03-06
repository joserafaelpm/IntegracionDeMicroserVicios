import { UsuarioService } from './../../Services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from "./../../cargar-scripts.service";
import { User } from 'src/app/Modelos/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['../../../assets/CSS/Menu.css','../../../assets/CSS/registro.css']
})
export class UsuarioComponent implements OnInit {


  usuario: User={
    id: '',
    name: '',
    username: '',
    password: ''
  };


  constructor( private _CargaScripts: CargarScriptsService, private UsuarioService: UsuarioService,private router: Router) {

    _CargaScripts.Carga(["jquery.min"]);
    _CargaScripts.Carga(["main"]);
  }

  ngOnInit(): void {
  }

  agregarUsuario(){
    console.log(this.usuario+'-------------------------------')
    this.UsuarioService.addUser(this.usuario).subscribe();
    this.router.navigate(['/VerUser']);
  }
}
