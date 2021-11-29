import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from "./../../cargar-scripts.service";
import { Factura } from 'src/app/Modelos/Factura';
import { FacturaService } from 'src/app/Services/factura.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

  //variable
  ListarFactura: Factura[]=[];
  factura: Factura= new Factura();
  constructor(private _CargaScripts: CargarScriptsService, private FacturaService: FacturaService, private router: Router) { }

  ngOnInit(): void {
    this.listarFacturas();
  }

  listarFacturas() {
    this.FacturaService.getFacturas().subscribe((data: any) => {
      this.ListarFactura = data.body;
      console.log(this.ListarFactura);
    });
  }

  buscarFactura(id: string) {
    this.FacturaService.getFactura(id).subscribe((data: any) => {
      this.factura = data.body;
      console.log(this.factura);
    });
  }

  eliminarFactura(id: string) {
     this.FacturaService.deleteFactura(id).subscribe((data: any) => {
       this.factura = data.body;
       return this.factura.id;
     })
  }

  agregarFactura(p:Factura) {
    this.FacturaService.addFactura(p);
  }

  modificar() {
    this.FacturaService.editFactura(this.factura).subscribe();
    this.router.navigate(['/listaFactura/']);
  }

}
