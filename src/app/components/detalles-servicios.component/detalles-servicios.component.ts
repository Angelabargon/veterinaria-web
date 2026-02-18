import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Servicio } from '../../servicios/servicios/servicios.service';

@Component({
  selector: 'app-detalles-servicios',
  templateUrl: './detalles-servicios.component.html',
  standalone: false,
  styleUrls: ['./detalles-servicios.component.css']
})
export class DetallesServiciosComponent {
  @Input() servicio!: Servicio;
  @Output() cerrar = new EventEmitter<void>();
}
