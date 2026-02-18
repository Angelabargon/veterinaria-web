// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module';
import {RouterModule} from '@angular/router';
import { App} from './app';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService} from '../app/servicios/in-memory-data.service/in-memory-data.service';

import { NavBarComponent } from './components/nav-bar.component/nav-bar.component';
import { HomeComponent } from './components/home.component/home.component';
import { ListaServiciosComponent } from './components/lista-servicios.component/lista-servicios.component';
import { DetallesServiciosComponent } from './components/detalles-servicios.component/detalles-servicios.component';
import { MiPerfilComponent } from './components/mi-perfil.component/mi-perfil.component';
import { MisMascotasComponent } from './components/mis-mascotas.component/mis-mascotas.component';
import { ReservarCitaComponent } from './components/reservar-cita.component/reservar-cita.component';
import { ContactoComponent } from './components/contacto.component/contacto.component';
import { SobreNosotrosComponent} from './components/sobre-nosotros.component/sobre-nosotros.component';  
import { FaqComponent } from './components/faq.component/faq.component';
import { MisReservasComponent } from './components/mis-reservas.component/mis-reservas.component';
import { RegistroComponent } from './components/registro.component/registro.component';

@NgModule({
  declarations: [
    App,
    NavBarComponent,  
    HomeComponent,
    ListaServiciosComponent,
    DetallesServiciosComponent,
    MiPerfilComponent,
    MisMascotasComponent,
    ReservarCitaComponent,
    ContactoComponent,
    SobreNosotrosComponent,
    FaqComponent,
    MisReservasComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 400 })
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }