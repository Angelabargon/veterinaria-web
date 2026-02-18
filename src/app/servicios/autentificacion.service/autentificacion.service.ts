import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../../models/user.models';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {

  private apiUrl = 'api/usuarios';
  private usuarioActual: Usuario | null = null;

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<boolean> {
    return this.http
      .get<Usuario[]>(`${this.apiUrl}?username=${username}&password=${password}`)
      .pipe(
        map(usuarios => {
          if (usuarios.length > 0) {
            this.usuarioActual = usuarios[0];
            return true;
          }
          return false;
        })
      );
  }

  registrar(nuevo: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl, nuevo);
  }

  logout(): void {
    this.usuarioActual = null;
  }

  getUsuarioActual(): Usuario | null {
    return this.usuarioActual;
  }
}
