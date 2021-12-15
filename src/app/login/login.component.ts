import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from "./../cargar-scripts.service";
import { User } from 'src/app/Modelos/User';
import { UsuarioService } from '../Services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../assets/CSS/style.css']
})
export class LoginComponent implements OnInit {

  User: User={
    username: '',
    password: ''
  };
  constructor(private _CargaScripts: CargarScriptsService, private UsuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
  }
  login(user: User): void {
    this.UsuarioService.getLogin(user).subscribe((data: any) => {
      this.router.navigate(['/home']);
    });
  }


}
