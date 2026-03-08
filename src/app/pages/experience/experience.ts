import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExperienceCard } from '../../components/experience-card/experience-card';

@Component({
  selector: 'app-experience',
  imports: [RouterOutlet, ExperienceCard],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {

  principalExperience = [
    {rol: "Desarrollo Frontend - Angular & Ionic", site: "JRC Softcoding Solutions", duration: "Octubre 2024 - Marzo 2025",
      activities: [
        "Maquetado de interfaces interactivas y responsive para nuevos componentes del sistema",
        "Mantenimiento evolutivo y optimización de componentes existentes para mejorar la experiencia del usuario",
        "Consumo de APIs",
        "Gestión de flujos de trabajo mediante metodologías ágiles y resolución de tickets en entornos colaborativos (Trello)"
      ]}
  ]

  secondaryExperience = [
    {rol: "Oficina de Ingreso", site: "UADE", duration: "Julio 2023 - Diciembre 2023", activities: ["Desarrollo de habilidades de comunicación efectiva y atención personalizada a la comunidad universitaria"]},
    {rol: "Hardware", site: "Freelancer", duration: "Diciembre 2023 - Actual", activities: ["Arreglo, mantenimiento y ensamble de equipos"]}
  ]

}
