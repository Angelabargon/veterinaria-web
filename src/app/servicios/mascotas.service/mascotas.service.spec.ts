import { TestBed } from '@angular/core/testing';
import { MascotasService } from './mascotas.service';
import { Mascota } from '../../models/mascotas.models';

describe('MascotasService', () => {
  let service: MascotasService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MascotasService]
    });
    service = TestBed.inject(MascotasService);
  });

  it('debe ser creado', () => {
    expect(service).toBeTruthy();
  });

  it('debe obtener las mascotas por duenioId (síncronamente)', () => {
    const duenioId = 1;
    const mascotas = service.getMascotasPorDuenio(duenioId);

    expect(mascotas.length).toBe(2);
    expect(mascotas[0].nombre).toBe('Darth Vader');
    expect(mascotas[1].nombre).toBe('Tuna');
  });

  it('debe agregar una nueva mascota', () => {
    const nuevaMascota: Omit<Mascota, 'id'> = {
      nombre: 'Pelusa',
      raza: 'Angora',
      edad: 2,
      duenioId: 3
    };

    const totalInicial = service.getMascotasPorDuenio(3).length;
    
    service.agregarMascota(nuevaMascota);

    const mascotasDuenio3 = service.getMascotasPorDuenio(3);
    expect(mascotasDuenio3.length).toBe(totalInicial + 1);
    expect(mascotasDuenio3.find(m => m.nombre === 'Pelusa')).toBeDefined();
  });
});