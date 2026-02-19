import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../../models/user.models';
import { Observable, map, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {

  private apiUrl = 'api/usuarios';
  private usuarioActualSubject = new BehaviorSubject<Usuario | null>(null);
  usuarioActual$ = this.usuarioActualSubject.asObservable(); // observable público

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<boolean> {
    return this.http.get<Usuario[]>(`${this.apiUrl}?username=${username}&password=${password}`)
      .pipe(
        map(usuarios => {
          if (usuarios.length > 0) {
            this.usuarioActualSubject.next(usuarios[0]);
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
    this.usuarioActualSubject.next(null);
  }

  getUsuarioActual(): Usuario | null {
    return this.usuarioActualSubject.value;
  }
}
