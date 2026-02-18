import { Injectable } from '@angular/core'; // Interfaz para tipado de cada servicio 
export interface Servicio 
{ 
  id: number;
  nombre: string;
  descripcion: string;  
  precio: number; 
  imagen?:   string; 
} 

@Injectable({ 
  providedIn: 'root' 
}) 

export class ServiciosService 
{ 
  private lista: Servicio[] = 
  [ 
    { id: 1, nombre: 'Consulta general', descripcion: 'Revisión completa', precio: 50, imagen: 'img/consulta.jpg' }, 
    { id: 2, nombre: 'Vacunación', descripcion: 'Vacunas anuales', precio: 60, imagen: 'img/vacuna.jpg' }, 
    { id: 3, nombre: 'Peluquería', descripcion: 'Baño y corte', precio: 30, imagen: 'img/peluqueria.jpg' },
    { id: 4, nombre: 'Control nutricional y de peso', descripcion: 'Asesoramiento personalizado para la dieta de tu mascota', precio: 30, imagen: 'img/nutricion.jpg' }, 
    { id: 5, nombre: 'Cirugía menor', descripcion: 'Procedimientos quirúrgicos menores para tu mascota', precio: 150, imagen: 'img/cirugia.jpg' }, 
    { id: 6, nombre: 'Análisis de laboratorio', descripcion: 'Pruebas de sangre, orina y heces para diagnosticar<br>enfermedades', precio: 40, imagen: 'img/laboratotio.jpg' }, 
    { id: 7, nombre: 'Limpieza dental', descripcion: 'Limpieza profesional para mantener la salud bucal de <br> tu mascota', precio: 80, imagen: 'img/dental.jpg' }, 
    { id: 8, nombre: 'Hospitalización', descripcion: 'Cuidado y monitoreo las 24 horas para tu mascota <br> (precio al dia)', precio: 100, imagen: 'img/hospitalizacion.jpg' }, 
    { id: 9, nombre: 'Emergencias', descripcion: 'Atención inmediata para situaciones críticas.<br>Llama a nuestro teléfono de emergencias: 654432342', precio: 200, imagen: 'img/emergencia.jpg' }, 
    { id: 10, nombre: 'Esterilización', descripcion: 'Procedimiento quirúrgico para prevenir camadas no deseadas', precio: 120, imagen: 'img/esterilizacion.png' } 
  ]; 
  getServicios(): Servicio[] 
  { return this.lista; } 
  
  getServicioById(id: number): Servicio | undefined 
  { return this.lista.find(s => s.id === id); } 
  
  addServicio(servicio: Servicio): void 
  { this.lista.push(servicio); } 
}