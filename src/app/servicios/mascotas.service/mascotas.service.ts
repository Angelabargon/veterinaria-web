import { Injectable } from '@angular/core'; 
import { Mascota } from '../../models/mascotas.models'; 

@Injectable({ 
  providedIn: 'root', 
}) 

export class MascotasService 
{ 
  private mascotas: Mascota[] = 
  [
    { id: 1, nombre: 'Darth Vader', raza: 'Siberiano', edad: 3, duenioId: 1 }, 
    { id: 2, nombre: 'Tuna', raza: 'Siames', edad: 2, duenioId: 1 }, 
    { id: 3, nombre: 'Luna', raza: 'Persa', edad: 4, duenioId: 2 }, 
    { id: 4, nombre: 'Max', raza: 'Tuxedo', edad: 5, duenioId: 3 }, 
    { id: 5, nombre: 'Nina', raza: 'Atigrado', edad: 1, duenioId: 4 }, 
    { id: 6, nombre: 'Simba', raza: 'Gato Común', edad: 3, duenioId: 5 }, 
    { id: 7, nombre: 'Rocky', raza: 'Oriental de pelo corto', edad: 6, duenioId: 6 }, 
    { id: 8, nombre: 'Kai', raza: 'Siames', edad: 2, duenioId: 6 }, 
    { id: 9, nombre: 'Mia', raza: 'Gato de Angora', edad: 2, duenioId: 7 }, 
    { id: 10, nombre: 'Toby', raza: 'Oriental sin pelo', edad: 4, duenioId: 8 }, 
    { id: 11, nombre: 'Mandy', raza: 'Naranja', edad: 3, duenioId: 10 }, 
    { id: 12, nombre: 'Sia', raza: 'Tricolor', edad: 3, duenioId: 10 }, 
    { id: 13, nombre: 'Lola', raza: 'Gato Esfinge', edad: 5, duenioId: 9 }, 
    { id: 14, nombre: 'Indalo', raza: 'Gato de Bengala', edad: 2, duenioId: 9 }, 
  ]; 
  
  agregarMascota(mascota: Omit<Mascota, 'id'>): void 
  { this.mascotas.push({ ...mascota, id: this.mascotas.length + 1 }); } 
  
  getMascotasPorDuenio(duenioId: number): Mascota[] 
  { return this.mascotas.filter(m => m.duenioId === duenioId); } 
}