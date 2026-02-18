import { Component, Input, OnInit } from '@angular/core';
import { CitasService, Cita } from '../../servicios/citas.service/citas.service';

@Component({
  selector: 'app-mis-reservas',
  templateUrl: './mis-reservas.component.html',
  standalone: false,
  styleUrls: ['./mis-reservas.component.css']
})

export class MisReservasComponent implements OnInit 
{
  @Input() idMascota!: number; 
  reservas: Cita[] = [];

  constructor(private citasService: CitasService) {}

  ngOnInit(): void 
  {
    this.reservas = this.citasService.getCitasPorMascota(this.idMascota);
  }
}
