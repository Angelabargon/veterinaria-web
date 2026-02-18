import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutentificacionService } from '../../servicios/autentificacion.service/autentificacion.service';

@Component({
  selector: 'app-registro',
  standalone: false,
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css',
})
export class RegistroComponent {
registroForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private authService: AutentificacionService) {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      username: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]], // Valida @dominio
      telefono: ['', [Validators.required, Validators.pattern("^[0-9]{9}$")]], // 9 números
      pass: ['', [Validators.required, Validators.minLength(4)]] // Min 4 chars
    });
  }

  onRegistrar() {
    if (this.registroForm.valid) {
      console.log('Datos del nuevo usuario:', this.registroForm.value);
      this.authService.registrar(this.registroForm.value).subscribe(usuario => {
      alert('¡Registro con éxito!');
      this.router.navigate(['/login']);
    });
    }
  }
}
