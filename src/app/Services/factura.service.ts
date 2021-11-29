import { Injectable } from '@angular/core';
import { urlFactura } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Factura } from '../Modelos/Factura';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class FacturaService {
  private url = `${urlFactura}/api/factura`;
  constructor(private http: HttpClient, private router: Router) {}

  //getfacturas
  getFacturas(): Observable<Factura[]> {
    return this.http.get<Factura[]>(this.url);
  }

  //get un factura
  getFactura(id: string): Observable<any> {
    return this.http.get<any>(this.url + '/' + id);
  }

  //agregar un factura
  addFactura(factura: Factura) {
    return this.http.post(this.url, factura);
  }

  //eliminar
  deleteFactura(id: string): Observable<any> {
    return this.http.delete<any>(this.url + '/' + id);
  }

  //modificar un factura
  editFactura(factura: Factura) {
    return this.http.put(this.url, factura);
  }
}
