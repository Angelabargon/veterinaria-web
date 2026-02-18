import { Injectable } from '@angular/core'; 

export interface Cita 
{
   id: number; 
   idMascota: number; 
   fecha: string; 
   hora: string;
   motivo: string; 
  }
  
@Injectable({ 
  providedIn: 'root'
}) 

export class CitasService 
{
  private citas: Cita[] = 
  [ 
    { id: 1, idMascota: 1, fecha: '2026-03-15', hora:'10:00', motivo: 'Vacuna de la rabia' }, 
    { id: 2, idMascota: 1, fecha: '2026-06-20', hora:'14:30', motivo: 'Limpieza dental' }, 
    { id: 3, idMascota: 2, fecha: '2026-04-10', hora:'09:15', motivo: 'Revisión general' }, 
    { id: 4, idMascota: 3, fecha: '2026-05-05', hora:'11:45', motivo: 'Peluquería' }, 
    { id: 5, idMascota: 4, fecha: '2026-07-12', hora:'13:30', motivo: 'Limpieza dental' }, 
    { id: 6, idMascota: 4, fecha: '2026-08-01', hora:'15:45', motivo: 'Análisis de sangre' }, 
    { id: 7, idMascota: 5, fecha: '2026-08-18', hora:'09:00', motivo: 'Revisión general' }, 
    { id: 8, idMascota: 6, fecha: '2026-09-22', hora:'14:00', motivo: 'Castración' }, 
    { id: 9, idMascota: 7, fecha: '2026-10-30', hora:'10:30', motivo: 'Control nutricional y de peso' }, 
    { id: 10, idMascota: 8, fecha: '2026-11-15', hora:'16:45', motivo: 'Revisión general' }, 
    { id: 11, idMascota: 10, fecha: '2027-01-20', hora:'13:30', motivo: 'Peluquería' }, 
    { id: 12, idMascota: 11, fecha: '2027-02-14', hora:'15:45', motivo: 'Revisión general' }, 
    { id: 13, idMascota: 12, fecha: '2027-03-10', hora:'14:30', motivo: 'Vacuna anual' }, 
  ]; 
  
  constructor() { } 

  getTodasLasCitas(): Cita[] 
  {  return this.citas; }
  getCitasPorMascota(idMascota: number): Cita[] 
  { return this.citas.filter((cita: Cita) => cita.idMascota === idMascota); } 
  
  agregarCita(nuevaCita: Cita) 
  { this.citas.push(nuevaCita); console.log('Cita guardada en el servicio:', this.citas); } 

}