import { Component, OnInit } from '@angular/core';
import { MascotasService } from '../../servicios/mascotas.service/mascotas.service';
import { AutentificacionService } from '../../servicios/autentificacion.service/autentificacion.service';
import { Mascota } from '../../models/mascotas.models';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-mis-mascotas',
  templateUrl: './mis-mascotas.component.html',
  standalone: false,
  styleUrls: ['./mis-mascotas.component.css']
})

export class MisMascotasComponent implements OnInit 
{
  mascotas: Mascota[] = [];
  mascotaSeleccionadaId: number | null = null;

  constructor(
    private mascotasService: MascotasService,
    private authService: AutentificacionService,
    private router: Router 
  ) {}

  ngOnInit(): void 
  {
    const usuario = this.authService.getUsuarioActual();
    
    if (usuario) 
    {
      try {  this.mascotas = this.mascotasService.getMascotasPorDuenio(usuario.id);  } 
      catch (error: unknown) 
      {  console.error('Error al cargar las mascotas:', error);  }
    }
  }

  toggleReservas(id: number) 
  {  this.mascotaSeleccionadaId = this.mascotaSeleccionadaId === id ? null : id;  }

  salir() {
    this.authService.logout();
    this.router.navigate(['/home']); 
  }
}