import { Component, OnInit } from '@angular/core';
import { ServiciosService, Servicio } from '../../servicios/servicios/servicios.service';

@Component({
  selector: 'app-lista-servicios',
  templateUrl: './lista-servicios.component.html',
  standalone: false,
  styleUrls: ['./lista-servicios.component.css']
})
export class ListaServiciosComponent implements OnInit {
  servicioSeleccionado: Servicio | null = null;
  servicios: Servicio[] = [];

  constructor(private serviciosService: ServiciosService) {}

  ngOnInit(): void {
  console.log("Componente cargado");
  this.servicios = this.serviciosService.getServicios();
  console.log("Servicios cargados:", this.servicios);
  }


  abrirDetalles(servicio: Servicio) {
    this.servicioSeleccionado = (this.servicioSeleccionado === servicio) ? null : servicio;
  }
}
