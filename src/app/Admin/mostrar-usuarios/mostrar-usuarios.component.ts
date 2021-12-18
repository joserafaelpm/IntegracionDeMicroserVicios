import { User } from 'src/app/Modelos/User';
import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from "./../../cargar-scripts.service";
import { UsuarioService } from './../../Services/usuario.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-mostrar-usuarios',
  templateUrl: './mostrar-usuarios.component.html',
  styleUrls: ['../../../assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css', '../../../assets/CSS/Menu.css',
  '../../../assets/CSS/Util.css','../../../assets/vendor/perfect-scrollbar/perfect-scrollbar.css',
  '../../../assets/vendor/select2/select2.min.css','../../../assets/vendor/animate/animate.css','../../../assets/vendor/bootstrap/css/bootstrap.min.css']
})
export class MostrarUsuariosComponent implements OnInit {

  //variable
  ListarUsuarios: User[]=[];
  user: User= new User();
  constructor( private _CargaScripts: CargarScriptsService, private UsuarioService: UsuarioService, private router: Router) {

    _CargaScripts.Carga(["jquery.min"]);
    _CargaScripts.Carga(["main"]);
  }

  ngOnInit(): void {
    this.listarUsuarios();
  }

  listarUsuarios() {
    this.UsuarioService.getUsuario().subscribe((data: any) => {
      this.ListarUsuarios = data.body;
      console.log(this.ListarUsuarios);
    });
  }

  buscarUsuario(user: User) {
    this.router.navigate(['/editarUser', user]);
  }

  eliminarUsuario(id:string) {
    this.UsuarioService.deleteUser(id).subscribe()
    this.router.navigate(['/home']);
    window.location.reload();
  }

  agregarUsuario(p:User) {
    this.UsuarioService.addUser(p);
  }

  editarUsuario(p: User) {
    this.UsuarioService.editUser(p);
  }


}
