import { User } from 'src/app/Modelos/User';
import { urlUser } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

 private url = `${urlUser}/api/User`;
 private url2 = `${urlUser}/api/auth`;
  constructor(private http: HttpClient, private router: Router) {}

  //getUsers
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  getLogin(User: User): Observable<any> {
    return this.http.post(this.url2+"/login", User);
  }

  //return this.http.get(this.url);

  //get un User
  getUser(id: string): Observable<any> {
    return this.http.get<any>(this.url + '/' + id);
  }

  //agregar un User
  addUser(User: User){
    return this.http.post(this.url, User);
  }

  //eliminar
  deleteUser(id: string): Observable<any> {
    return this.http.delete<any>(this.url + '/' + id);
  }

  //modificar un User
  editUser(User: User){
    return this.http.put(this.url, User);
  }
}
