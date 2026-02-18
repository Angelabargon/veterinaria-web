import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: false,
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  faqs = [
    { q: '¿Se necesita agendar una cita previa para que me atiendan?', a: 'Sí, para cirugías y consultas especialistas.' },
    { q: '¿Atendéis urgencias 24h todos los días de la semana?', a: 'Sí, tenemos un equipo de guardia siempre disponible.' },
    { q: '¿Qué especies atendéis?', a: 'Nos especializamos en gatos.' },
    { q: '¿Qué métodos de pago aceptáis?', a: 'Aceptamos efectivo, tarjetas de crédito/débito y transferencias bancarias.' },
    { q: '¿Puedo solicitar una consulta a domicilio?', a: 'Sí, ofrecemos consultas a domicilio para casos específicos. Por favor, contáctanos para más detalles.' },
    { q: '¿Qué debo hacer en caso de una emergencia veterinaria?', a: 'En caso de emergencia, llama inmediatamente a nuestro número de emergencias: 654432342. Nuestro equipo estará listo para asistirte.' }
  ];
}