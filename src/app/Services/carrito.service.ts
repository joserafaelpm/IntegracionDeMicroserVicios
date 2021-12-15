import { urlCarrito } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Carrito } from '../Modelos/Carrito';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

 private url =  `${urlCarrito}/api/carrito`;
  constructor(private http: HttpClient, private router: Router) {}

  //getProductos
  getCarritos(): Observable<Carrito[]> {
    return this.http.get<Carrito[]>(this.url);
  }

  //return this.http.get(this.url);

  //get un Carrito
  getCarrito(id: string): Observable<any> {
    return this.http.get<any>(this.url + '/' + id);
  }

  //agregar un Carrito
  addCarrito(c: Carrito): Observable<any> {
    return this.http.post<any>(this.url, c);
  }

  //eliminar
  deleteCarrito(id: string): Observable<any> {
    return this.http.delete<any>(this.url + '/' + id);
  }

  //modificar un producto
  editCarrito(c: Carrito){
    return this.http.put(this.url, c);
  }
}
