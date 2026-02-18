import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService 
{
  createDb() {
    const usuarios = [
      { id: 1, username: 'admin', password: '1111', nombre: 'Admin', correo: 'admin@kittyvet.com', telefono: 978967979 },
      { id: 2, username: 'pedro_t', password: '1234', nombre: 'Pedro Tirado', correo: 'pedro@gmail.com', telefono: 600111222 },
      { id: 3, username: 'marcos_p', password: '1345', nombre: 'Marcos Pérez', correo: 'marcos@gmail.com', telefono: 600333444 },
      { id: 4, username: 'ana_vet', password: '1456', nombre: 'Ana Márqez', correo: 'ana@gmail.com', telefono: 600555666 },
      { id: 5, username: 'sergio_s', password: '1567', nombre: 'Sergio Soler', correo: 'sergio@gmail.com', telefono: 600777888 },
      { id: 6, username: 'marta_k', password: '1678', nombre: 'Marta Kap', correo: 'marta@gmail.com', telefono: 600999000 },
      { id: 7, username: 'juan_l', password: '1789', nombre: 'Juan León', correo: 'juan@gmail.com', telefono: 611222333 },
      { id: 8, username: 'elena_m', password: '1890', nombre: 'Elena Martínez', correo: 'elena@gmail.com', telefono: 622333444 },
      { id: 9, username: 'rober_t', password: '1901', nombre: 'Roberto Toranzo', correo: 'roberto@gmail.com', telefono: 633444555 },
      { id: 10, username: 'noelia_c', password: '1012', nombre: 'Noelia Cardoso', correo: 'noelia@gmail.com', telefono: 644555666 }
    ];

    return { usuarios }; 
  }
}
