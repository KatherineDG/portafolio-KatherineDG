import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  //Poner alt y href
  internalLinks = [
    { iconCDN: "/icons/icons8-user-96.png", title: "Perfil", alt: "Icon User"},
    { iconCDN: "/icons/icons8-shine-96.png", title: "Experiencia", alt: "Icon Shine"},
    { iconCDN: "/icons/icons8-stack-96.png", title: "Stack", alt: "Icon Stack"},
    { iconCDN: "/icons/icons8-launch-96.png", title: "Proyectos", alt: "Icon Launch"},
    { iconCDN: "/icons/icons8-graduation-cap-96.png", title: "Educación", alt: "Icon Graduation Cap"}
  ]

  externalLinks = [
    { iconCDN: "/icons/icons8-linkedin-96.png", title: "Linkedin", alt: "Icon Linkedin"},
    { iconCDN: "/icons/icons8-github-logo-96.png", title: "GitHub", alt: "Icon GitHub"},
    { iconCDN: "/icons/icons8-gmail-96.png", title: "Contacto", alt: "Icon Gmail"}
  ]
}
