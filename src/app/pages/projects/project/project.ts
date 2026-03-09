import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class Project {

    name = input.required<string>();

    projects = [
    { name: 'EduConnectAI',
      images: ['educonnectai'],
      technologies: ['React', 'Next.js', 'TypeScript', 'HTML', 'CSS', 'Python', 'LangChain', 'LLaMa 3.1', 'ChromaDB', 'PostgreSQL', 'MongoDB', 'Docker Compose', 'EC2 (AWS)'],
      information: 'Plataforma de aprendizaje basada en IA Generativa que utiliza la técnica RAG (Retrieval-Augmented Generation). Docentes pueden entrenar sus propios agentes con contenido y estilo específico para ofrecer respuestas precisas, evitar "alucinaciones" y fomentar el pensamiento crítico en el estudiante. El ecosistema fue construido sobre una infraestructura escalable basada en microservicios compuesta por 5 módulos independientes: Billetera virtual, Sistema RAG, Base de usuarios y Chat bidireccional.',
      repositories: [
        { site: 'GitHub',
          logo: 'github',
          type: 'repositorio',
          description: 'KatherineDG/EduConnectAI',
          link: 'https://github.com/KatherineDG/EduConnectAI.git'
        }
      ],
      highlights: [
        { logo: 'santanderx',
          title: 'Reconocimiento en Santander X Argentina Award University',
          description: 'Desarrollado junto a mi compañera Victoria Endendyk. El proyecto fue seleccionado como finalista nacional, destacándose entre más de 200 propuestas de todo el país por su enfoque innovador en tecnología aplicada a la educación.',
          image: 'educonnectai_santanderx'
        }
      ]
    },
    { name: 'Análisis de Dengue en CABA',
      images: ['reportedengue'],
      technologies: ['Python', 'sklearn', 'pandas', 'Excel', 'Looker Studio'],
      information: 'Análisis de datos epidemiológicos del Dengue en CABA orientado a la optimización de recursos en salud pública. Se implementó un pipeline completo de Data Science, desde la limpieza (ETL) y suplantación de datos faltantes mediante datasets demográficos auxiliares, hasta la creación de modelos predictivos. Se uilizaron los algoritmos Random Forest y Regresión Logística para identificar zonas críticas y predecir probabilidades de brotes por comuna, mes y grupo etario. El proyecto integra análisis y visualización estratégica en Looker Studio, transformando datos complejos en conclusiones accionables para mitigar la propagación del mosquito y reducir el gasto público en campañas preventivas.',
      repositories: [
        { site: 'GitHub',
          logo: 'github',
          type: 'repositorio',
          description: 'KatherineDG/EstudioDengueCienciaDeDatos',
          link: 'https://github.com/KatherineDG/EstudioDengueCienciaDeDatos.git'
        },
        { site: 'Looker',
          logo: 'google-looker',
          type: 'reporte',
          description: 'lookerstudio/reportedenguecaba',
          link: 'https://lookerstudio.google.com/reporting/20bd5209-7075-47df-8d35-70b63a6903ba'
        }
      ],
      highlights: []
    },
    { name: 'BeluAr Gateway de Pagos',
      images: ['gatewaydepagos'],
      technologies: ['Python', 'Django', 'Event Driven Architecture', 'AWS', 'SNS', 'SQS', 'WebSocket', 'API Gateway', 'EC2', 'GitHub Actions'],
      information: 'Belu.ar es una plataforma de gestión hotelera basada en una arquitectura de microservicios orientada a eventos. Tomando el rol de Backend, implementé el Gateway de Pagos como pieza central para manejar transacciones, coordinando su interacción con los módulos de Reservas y BackOffice. Para ello se utilizó AWS SQS y SNS para desacoplar estos servicios, permitiendo que una reserva confirmada dispare eventos de pago y actualizaciones de estado en el panel administrativo de forma asincrónica. Esta infraestructura, garantiza la consistencia de datos entre los tres servicios asegurando alta disponibilidad y escalabilidad.',
      repositories: [
        { site: 'GitHub',
          logo: 'github',
          type: 'repositorio',
          description: 'KatherineDG/Gateway-De-Pagos-DAII',
          link: 'https://github.com/KatherineDG/Gateway-De-Pagos-DAII.git'
        }
      ],
      highlights: []
    },
    { name: 'Kukit',
      images: ['kukit'],
      technologies: ['User Research', 'Mapa de empatía', 'Proto-Persona', 'Persona', 'User Journey Map', 'Benchmarking', 'Arquitectura de la Información', 'Figma', 'Wireframing', 'Prototype', 'Leyes de Gestalt', 'Heurísticas de la Usabilidad de Nielsen', 'Test de Usuario'],
      information: 'Kükit es una plataforma móvil que transforma ingredientes disponibles en el hogar en recetas personalizadas para mitigar el desperdicio de alimentos. Como Investigadora UX y Figma Maker dentro del equipo, realicé la validación de hipótesis y el prototipado de alta fidelidad. Analicé 69 encuestas y entrevistas para construir Mapas de Empatía y User Journey Maps, identificando diferentes puntos de dolor. Se tradujeron estos hallazgos en un sistema de diseño en Figma, aplicando heurísticas de Nielsen para garantizar una navegación intuitiva. Logrando un diseño de producto donde la estética no es solo visual, sino una herramienta funcional que elimina la carga mental del usuario.',
      repositories: [
        { site: 'Figma',
          logo: 'figma',
          type: 'prototipo',
          description: 'figma/kukit',
          link: 'https://www.figma.com/design/5vmXbCWfJc7py5THwNDTSS/K%C3%BCkit?node-id=0-1&t=2mkPuoEI2HOSXdVQ-1'
        },
        { site: 'Figma',
          logo: 'figma',
          type: 'wireframes',
          description: 'figma/kukit',
          link: 'https://www.figma.com/proto/5vmXbCWfJc7py5THwNDTSS/K%C3%BCkit?node-id=203-2&p=f&t=GnPIudQFEPGBD6hv-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=203%3A2'
        },
        { site: 'Documentación',
          logo: 'docs',
          type: 'documentación',
          description: 'document/kukit',
          link: 'https://www.figma.com/design/5vmXbCWfJc7py5THwNDTSS/K%C3%BCkit?node-id=0-1&t=2mkPuoEI2HOSXdVQ-1'
        }
      ],
      highlights: []
    },
    { name: 'EcoSense',
      images: ['ecosense'],
      technologies: ['Python', 'Spark', 'Next.js', 'WebSocket', 'MongoDB', 'AWS', 'Kafka', 'EC2', 'Microservices', 'Event Drive Architecture', 'IOT Simulator'],
      information: 'EcoSense es una plataforma de monitoreo ambiental inteligente diseñada para optimizar el consumo de recursos en el sector agrícola multisede. Me enfoqué en el manejo de datos masivos, integrando Apache Spark para el análisis estadístico y procesamiento en tiempo real de métricas provenientes de sensores IoT (simulado). Se implementó la lógica de alarmado mediante Spark Streaming para detectar excesos de consumo de forma inmediata. Además, se desarrolló un dashboard interactivo en Next.js que consume datos vía WebSockets, transformando flujos complejos de Big Data en visualizaciones estratégicas que permiten disminuir la dependencia de auditorías externas y mejorar la sostenibilidad operativa.',
      repositories: [
        { site: 'GitHub',
          logo: 'github',
          type: 'repositorio',
          description: 'KatherineDG/EcoSense',
          link: 'https://github.com/KatherineDG/EcoSenseTPI2025.git'
        },
        { site: 'GitHub',
          logo: 'github',
          type: 'repositorio',
          description: 'KatherineDG/dashboard-real-time',
          link: 'https://github.com/KatherineDG/dashboard-real-time.git'
        },
        { site: 'GitHub',
          logo: 'github',
          type: 'repositorio',
          description: 'Sistema integrado',
          link: 'https://github.com/ManuMarcos/iot-eda-architecture.git'
        }
      ],
      highlights: []
    }
  ]

  currentProject = computed(() => 
    this.projects.find(p => p.name === this.name())
  )



}
