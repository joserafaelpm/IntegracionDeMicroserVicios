
import { UsuarioService } from './../Services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Modelos/User';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../assets/CSS/style.css']
})
export class LoginComponent implements OnInit {

  constructor(private UsuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {

  }

  isLoggedIn = false;
  usuario: User={
    username: '',
    password:''
  };


  onLogin(): void{
    console.log('login ', this.usuario.username + 'pass' + this.usuario.password);
    this.UsuarioService.login(this.usuario).subscribe();
    this.router.navigate(['/home']);
  }
}
