import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutentificacionService } from '../../servicios/autentificacion.service/autentificacion.service';
import { CitasService, Cita } from '../../servicios/citas.service/citas.service';
import { MascotasService } from '../../servicios/mascotas.service/mascotas.service';
import { Usuario } from '../../models/user.models';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  standalone: false,
  styleUrls: ['./mi-perfil.component.css']
})
export class MiPerfilComponent implements OnInit {
  usuario = '';
  password = '';
  autenticado = false;
  citasProximas: Cita[] = [];
  usuarioLogueado: Usuario | null = null;

  constructor(
    private router: Router,
    private autentificacionService: AutentificacionService,
    private citasService: CitasService,
    private mascotasService: MascotasService,
  ) {}

  ngOnInit() {
    const usuario = this.autentificacionService.getUsuarioActual();
    this.usuarioLogueado = usuario;
    this.autenticado = !!usuario;
    if (usuario) this.verificarCitasProximas();
  }

  login(event?: Event) {
    if (event) event.preventDefault();

    this.autentificacionService.login(this.usuario, this.password)
      .subscribe(exito => {
        this.autenticado = exito;

        if (exito) {
          this.usuarioLogueado = this.autentificacionService.getUsuarioActual();

          Swal.fire({
            title: `¡Hola, ${this.usuarioLogueado?.nombre}!`,
            timer: 2000,
            showConfirmButton: false,
            toast: true,
            position: 'top-end'
          });

          this.verificarCitasProximas();
        } else {
          Swal.fire({
            title: 'Acceso denegado',
            text: 'Credenciales incorrectas',
            confirmButtonText: 'Reintentar',
            confirmButtonColor: '#1aab00'
          });
        }
      });
  }

  registrar(nuevo: Usuario, event?: Event) {
    if (event) event.preventDefault();

    this.autentificacionService.registrar(nuevo).subscribe(usuario => {
      Swal.fire({
        title: 'Registro exitoso',
        text: `Bienvenido, ${usuario.nombre}!`,
        icon: 'success',
        confirmButtonColor: '#1aab00'
      });

      this.usuario = usuario.username;
      this.password = usuario.password;
      this.login();
    });
  }

  verificarCitasProximas() {
    if (!this.usuarioLogueado) return;

    const misMascotasIds = this.mascotasService
      .getMascotasPorDuenio(this.usuarioLogueado.id)
      .map(m => m.id);

    const ahora = new Date();

    this.citasProximas = this.citasService.getTodasLasCitas().filter(cita => {
      if (!misMascotasIds.includes(cita.idMascota)) return false;

      const [h, m] = cita.hora.split(':').map(Number);
      const fechaCita = new Date(cita.fecha);
      fechaCita.setHours(h, m, 0, 0);

      const diff = Math.ceil((fechaCita.getTime() - ahora.getTime()) / (1000 * 60 * 60 * 24));
      return diff >= 0 && diff <= 7;
    });

    if (this.citasProximas.length > 0) {
      Swal.fire({
        title: 'Citas Próximas',
        text: `Tienes ${this.citasProximas.length} cita(s) esta semana.`,
        confirmButtonText: 'Cerrar',
        confirmButtonColor: '#1aab00'
      });
    }
  }

  salir() {
    this.autentificacionService.logout();
    this.autenticado = false;
    this.usuarioLogueado = null;
    this.usuario = '';
    this.password = '';
    this.router.navigate(['/perfil']); 
  }
}
