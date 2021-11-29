import { urlProducto } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../Modelos/Producto';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class ProductoService {

 private url = `${urlProducto}/api/producto`;
  constructor(private http: HttpClient, private router: Router) {}

  //getProductos
  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.url);
  }

  //return this.http.get(this.url);

  //get un producto
  getProducto(id: string): Observable<any> {
    return this.http.get<any>(this.url + '/' + id);
  }

  //agregar un producto
  addProducto(producto: Producto){
    return this.http.post(this.url, producto);
  }

  //eliminar
  deleteProducto(id: string): Observable<any> {
    return this.http.delete<any>(this.url + '/' + id);
  }

  //modificar un producto
  editProducto(producto: Producto){
    return this.http.put(this.url, producto);
  }
}

