import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProjectCard } from '../../components/project-card/project-card';

@Component({
  selector: 'app-projects',
  imports: [RouterOutlet, ProjectCard, RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {

  projects = [
    { name: 'EduConnectAI',
      image: 'educonnectai',
      role: 'FullStack',
      type: 'Tesis - Finalista en SXAAU',
      year: 2025,
      description: 'Una plataforma educativa impulsada por personas y potenciada por inteligencia artificial.',
    },
    { name: 'Análisis de Dengue en CABA',
      image: 'reportedengue',
      role: 'Data Science + ML',
      type: 'Trabajo Práctico',
      year: 2024,
      description: 'Identificación de patrones de propagación del dengue cruzando variables meteorológicas y sanitarias de CABA.',
    },
    { name: 'BeluAr Gateway de Pagos',
      image: 'gatewaydepagos',
      role: 'Backend + Architecture',
      type: 'Trabajo Práctico',
      year: 2024,
      description: 'Sistema desacoplado capaz de procesar pagos en un entorno de microservicios (Event Driven Architecture).',
    },
    { name: 'Kukit',
      image: 'kukit',
      role: 'UX/UI Design',
      type: 'Trabajo Práctico',
      year: 2025,
      description: 'Diseño de aplicación móvil de recetas personalizadas basadas en ingredientes del hogar.',
    },
    { name: 'EcoSense',
      image: 'ecosense',
      role: 'ML estadístico + Architecture',
      type: 'Trabajo Práctico de Investigación',
      year: 2025,
      description: 'Plataforma en tiempo real para la optimización de recursos y sostenibilidad ambiental agrícola multisede.',
    }
  ]
}
