import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectCard } from '../../components/project-card/project-card';

@Component({
  selector: 'app-projects',
  imports: [RouterOutlet, ProjectCard],
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
      technologies: ['React', 'Next.js', 'TypeScript', 'HTML', 'CSS', 'Python', 'LangChain', 'LLaMa 3.1', 'ChromaDB', 'PostgreSQL', 'MongoDB', 'Docker Compose', 'EC2 (AWS)'],
      information: 'Plataforma de aprendizaje basada en IA Generativa que utiliza la técnica RAG (Retrieval-Augmented Generation). Docentes pueden entrenar sus propios agentes con contenido y estilo específico para ofrecer respuestas precisas, evitar "alucinaciones" y fomentar el pensamiento crítico en el estudiante. El ecosistema fue construido sobre una infraestructura escalable basada en microservicios compuesta por 5 módulos independientes: Billetera virtual, Sistema RAG, Base de usuarios y Chat bidireccional.',
      repositories: [
        { site: 'GitHub',
          logo: 'github',
          description: 'KatherineDG/EduConnectAI',
          link: 'https://github.com/KatherineDG/EduConnectAI.git'
        }
      ],
      highlights: [
        { logo: 'santanderx',
          title: 'Reconocimiento en Santander X Argentina Award University',
          description: 'Desarrollado junto a mi compañera Victoria Endendyk. El proyecto fue seleccionado como finalista nacional, destacándose entre más de 200 propuestas de todo el país por su enfoque innovador en tecnología aplicada a la educación.',
          image: 'santanderx-educonnectai'
        }
      ]
    },
    { name: 'Análisis de Dengue en CABA',
      image: 'reportedengue',
      role: 'Data Science + ML',
      type: 'Trabajo Práctico',
      year: 2024,
      description: 'Identificación de patrones de propagación del dengue cruzando variables meteoroleógicas y sanitarias de CABA.',
      technologies: ['Python', 'sklearn', 'pandas', 'Excel', 'Looker Studio'],
      information: 'Análisis de datos epidemiológicos del Dengue en CABA orientado a la optimización de recursos en salud pública. Se implementó un pipeline completo de Data Science, desde la limpieza (ETL) y suplantación de datos faltantes mediante datasets demográficos auxiliares, hasta la creación de modelos predictivos. Se uilizaron los algoritmos Random Forest y Regresión Logística para identificar zonas críticas y predecir probabilidades de brotes por comuna, mes y grupo etario. El proyecto integra análisis y visualización estratégica en Looker Studio, transformando datos complejos en conclusiones accionables para mitigar la propagación del mosquito y reducir el gasto público en campañas preventivas.',
      repositories: [
        { site: 'GitHub',
          logo: 'github',
          description: 'KatherineDG/EstudioDengueCienciaDeDatos',
          link: 'https://github.com/KatherineDG/EstudioDengueCienciaDeDatos.git'
        },
        { site: 'Looker',
          logo: 'looker',
          description: 'lookerstudio/reportedenguecaba',
          link: 'https://lookerstudio.google.com/reporting/20bd5209-7075-47df-8d35-70b63a6903ba'
        }
      ],
      highlights: []
    }
  ]

  
    
    // { name: 'Análisis de Dengue en CABA', image: 'dengue', role: 'Data Science + ML', type: 'Trabajo Práctico', year: 2024, description: 'Identificación de patrones de propagación del dengue cruzando variables meteoroleógicas y sanitarias de CABA.' },
    // { name: 'BeluAr Gateway de Pagos', image: 'gatewaypagos', role: 'Backend + Architecture', type: 'Trabajo Práctico', year: 2024, description: 'Sistema desacoplado capaz de procesar pagos en un entorno de microservicios (Event Drive Architecture).' },
    // { name: 'Kukit', image: 'kukit', role: 'UX/UI Design', type: 'Trabajo Práctico', year: 2025, description: 'Diseño de aplicación móvil de recetas personalizadas basadas en ingredientes del hogar.' },
    // { name: 'EcoSense', image: 'ecosense', role: 'ML estadístico + Architecture', type: 'Trabajo Práctico de Investigación', year: 2025, description: 'Plataforma en tiempo real para la optimización de recursos y sostenibilidad ambiental agrícola multisede.' },
    // { name: 'Goalish', image: 'goalish', role: 'UX/UI Design', type: 'Personal', year: 2026, description: 'Plataforma móvil diseñada para simplificar la gestión financiera personal y el cumplimiento de objetivos de ahorro.' },

}
