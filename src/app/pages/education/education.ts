import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education {

  certificates = [
    { title: "Analista en Informática e Ingeniería en Informática",
      institute: "Universidad Argentina de la Empresa (UADE)",
      state: "en Curso",
      certificateImage: "uade"
    },
    { title: "Cloud Architecture - Trained",
      institute: "AWS Academy",
      state: "2025",
      certificateImage: "aws-academy"
    },
    { title: "Reparación y Armado de PC",
      institute: "Instituto Formación Técnica Boston",
      state: "2023",
      certificateImage: "iftb"
    },
    { title: "FullStack Python",
      institute: "Codo a Codo 4.0",
      state: "2022",
      certificateImage: "cac-python"
    },
    { title: "FullStack JAVA",
      institute: "Codo a Codo 4.0",
      state: "en Curso",
      certificateImage: "cac-java"
    },
  ]

}
