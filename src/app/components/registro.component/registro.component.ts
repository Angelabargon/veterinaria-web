import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutentificacionService } from '../../servicios/autentificacion.service/autentificacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  standalone: false,
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  registroForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AutentificacionService, private router: Router) {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      username: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern("^[0-9]{9}$")]],
      pass: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  onRegistrar(event: Event) 
  {
    event.preventDefault();

    if (this.registroForm.valid) {
      const datosForm = this.registroForm.value;
      
      const nuevoUsuario = {
        ...datosForm,
        id: Date.now(), 
        password: datosForm.pass 
      };

      this.authService.registrar(nuevoUsuario).subscribe(exito => {
        if (exito) {
          Swal.fire({
            title: '¡Registro completado!',
            text: 'Tu cuenta ha sido creada con éxito.',
            icon: 'success',
            confirmButtonText: 'Ir a mi perfil', 
            confirmButtonColor: '#2a9d8f',
            allowOutsideClick: false 
          }).then((result) => {
            if (result.isConfirmed) {
              this.authService.login(nuevoUsuario.username, nuevoUsuario.password).subscribe(() => {
                this.router.navigate(['/perfil']);
              });
            }
          });
        }
      });
    }
  }
}
