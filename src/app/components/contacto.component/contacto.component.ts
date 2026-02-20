import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  standalone: false,
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  email = '';
  telefono = '';
  pregunta = '';

  enviar() {
    alert('Pregunta enviada al Equipo de Veterinaria KittyCare');

    console.log('Email:', this.email);
    console.log('Teléfono:', this.telefono);
    console.log('Mensaje:', this.pregunta);

    this.email = '';
    this.telefono = '';
    this.pregunta = '';
  }
}