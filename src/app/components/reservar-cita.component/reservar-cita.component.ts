import { Component, OnInit } from '@angular/core';
import { MascotasService } from '../../servicios/mascotas.service/mascotas.service';
import { AutentificacionService } from '../../servicios/autentificacion.service/autentificacion.service';
import { Mascota } from '../../models/mascotas.models';
import { CitasService, Cita } from '../../servicios/citas.service/citas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reservar-cita',
  templateUrl: './reservar-cita.component.html',
  standalone: false,
  styleUrls: ['./reservar-cita.component.css']
})
export class ReservarCitaComponent implements OnInit {
  mascotas: Mascota[] = [];
  mascotaSeleccionada: string = '';
  fechaSeleccionada: string = '';
  horaSeleccionada: string = '';
  motivo: string = '';
  horasDisponibles: string[] = [];

  constructor(
    private mascotasService: MascotasService,
    private authService: AutentificacionService,
    private citasService: CitasService
  ) {}

  ngOnInit(): void {
    const usuario = this.authService.getUsuarioActual();
    if (usuario) {
      this.mascotas = this.mascotasService.getMascotasPorDuenio(usuario.id);
    }
    this.generarHoras();
  }

  generarHoras(): void {
    for (let h = 10; h <= 17; h++) {
      this.horasDisponibles.push(`${h}:00`);
      if (h < 17) {
        this.horasDisponibles.push(`${h}:30`);
      }
    }
  }

  validarFecha(): boolean {
    if (!this.fechaSeleccionada) return false;
    
    const fechaObj = new Date(this.fechaSeleccionada.replace(/-/g, '\/')); 
    const d = fechaObj.getDay();

    if (d === 0 || d === 6) {
      Swal.fire({ 
        title: 'Cerrado', 
        text: 'Solo atendemos de lunes a viernes', 
        confirmButtonColor: '#333' 
      });
      return false;
    }
    return true;
  }

  confirmarReserva(): void {
    if (!this.mascotaSeleccionada || !this.fechaSeleccionada || !this.horaSeleccionada) {
      Swal.fire({ title: 'Faltan datos', text: 'Por favor, completa todos los campos', confirmButtonColor: '#333' });
      return;
    }

    if (!this.validarFecha()) return;

    const mascota = this.mascotas.find(m => m.nombre === this.mascotaSeleccionada);
    const idMascotaCita = mascota ? mascota.id : 0; 

    const nuevaCita: Cita = {
      id: Math.floor(Math.random() * 10000),
      idMascota: idMascotaCita,
      fecha: this.fechaSeleccionada,
      hora: this.horaSeleccionada,
      motivo: this.motivo || 'Visita programada'
    };

    this.citasService.agregarCita(nuevaCita);

    Swal.fire({
      title: 'Agendada',
      text: '¡Cita agendada con éxito!',
      timer: 2000,
      showConfirmButton: false,
      toast: true,
      position: 'top-end'
    });

    this.mascotaSeleccionada = '';
    this.fechaSeleccionada = '';
    this.horaSeleccionada = '';
    this.motivo = '';
  }
}