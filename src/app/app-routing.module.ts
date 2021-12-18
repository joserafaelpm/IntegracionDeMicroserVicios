import { FacturaComponent } from './Factura/factura/factura.component';
import { UsuarioComponent } from './Admin/usuario/usuario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MostrarUsuariosComponent } from './Admin/mostrar-usuarios/mostrar-usuarios.component';
import { PrincipalComponent } from './Admin/principal/principal.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductoComponent } from './Producto/producto/producto.component';
import { RegistrarProductoComponent } from './Producto/registrar-producto/registrar-producto.component';
import { ModificarProductoComponent } from './Producto/modificar-producto/modificar-producto.component';
import { CarritoComponent } from './Carrito/carrito/carrito.component';
import { RegistroFacturaComponent } from './Factura/registro-factura/registro-factura.component';
import { EditarUserComponent } from './Admin/editar-user/editar-user.component';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"home", component:HomeComponent},
  {path:"carrito", component:CarritoComponent},
  {path:"VerUser", component:MostrarUsuariosComponent},
  {path:"editarUser", component:EditarUserComponent},
  {path:"usuario", component:UsuarioComponent},
  {path:"listaProducto", component:ProductoComponent},
  {path:"registrarProducto", component:RegistrarProductoComponent},
  {path:"actualizarProducto", component:ModificarProductoComponent},
  {path:"factura", component:FacturaComponent},
  {path:"registroFactura", component:RegistroFacturaComponent},
  {path:"login", component:UsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
