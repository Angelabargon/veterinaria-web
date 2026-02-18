// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home.component/home.component';
import { ListaServiciosComponent } from './components/lista-servicios.component/lista-servicios.component';
import { ContactoComponent } from './components/contacto.component/contacto.component';
import { MiPerfilComponent } from './components/mi-perfil.component/mi-perfil.component';
import { SobreNosotrosComponent } from './components/sobre-nosotros.component/sobre-nosotros.component';
import { FaqComponent } from './components/faq.component/faq.component';
import { MisMascotasComponent } from './components/mis-mascotas.component/mis-mascotas.component';
import { ReservarCitaComponent } from './components/reservar-cita.component/reservar-cita.component';
import { MisReservasComponent } from './components/mis-reservas.component/mis-reservas.component';
import { RegistroComponent } from './components/registro.component/registro.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // redirige al home
  { path: 'home', component: HomeComponent },
  { path: 'servicios', component: ListaServiciosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'perfil', component: MiPerfilComponent },
  { path: 'sobre-nosotros', component: SobreNosotrosComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'mis-mascotas', component: MisMascotasComponent },
  { path: 'reservar-cita', component: ReservarCitaComponent },
  { path: 'reservas', component: MisReservasComponent },
  { path: 'registro', component: RegistroComponent },

  { path: '**', redirectTo: 'home' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
