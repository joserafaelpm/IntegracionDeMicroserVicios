import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './Admin/usuario/usuario.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './Admin/principal/principal.component';
import { NavLatComponent } from './partials/nav-lat/nav-lat.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Inicio Servicio
import { CargarScriptsService } from "./cargar-scripts.service";
import { MostrarUsuariosComponent } from './Admin/mostrar-usuarios/mostrar-usuarios.component';
import { HomeComponent } from './home/home.component';
import { ProductoComponent } from './Producto/producto/producto.component';
import { RegistrarProductoComponent } from './Producto/registrar-producto/registrar-producto.component';
import { ModificarProductoComponent } from './Producto/modificar-producto/modificar-producto.component';
import { CarritoComponent } from './Carrito/carrito/carrito.component';
import { RegistroCarritoComponent } from './Carrito/registro-carrito/registro-carrito.component';
import { FacturaComponent } from './Factura/factura/factura.component';
import { RegistroFacturaComponent } from './Factura/registro-factura/registro-factura.component';
//Fin Servicio

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    LoginComponent,
    PrincipalComponent,
    NavLatComponent,
    MostrarUsuariosComponent,
    HomeComponent,
    ProductoComponent,
    RegistrarProductoComponent,
    ModificarProductoComponent,
    CarritoComponent,
    RegistroCarritoComponent,
    FacturaComponent,
    RegistroFacturaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CargarScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
