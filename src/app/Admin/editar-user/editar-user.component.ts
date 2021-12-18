import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from "./../../cargar-scripts.service";
import { UsuarioService } from './../../Services/usuario.service';
import { Router } from '@angular/router';
import { User } from './../../Modelos/User';

@Component({
  selector: 'app-editar-user',
  templateUrl: './editar-user.component.html',
  styleUrls: ['../../../assets/CSS/Menu.css','../../../assets/CSS/registro.css']
})
export class EditarUserComponent implements OnInit {



  usuario: User={
    id: '',
    name: '',
    username: ''
  };


  constructor( private _CargaScripts: CargarScriptsService, private UsuarioService: UsuarioService,private router: Router) {

    _CargaScripts.Carga(["jquery.min"]);
    _CargaScripts.Carga(["main"]);
  }

  ngOnInit(): void {

  }

  EditarUsuario(){
    this.UsuarioService.editUser(this.usuario).subscribe();
    this.router.navigate(['/VerUser']);
  }

}
