import { Component, input } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  currentUrl = input()
  isMenuOpen = false

  //Poner href
  internalLinks = [
    { iconCDN: "/icons/icons8-user-96.png", title: "Perfil", alt: "Icon User", url: "/profile" },
    { iconCDN: "/icons/icons8-shine-96.png", title: "Experiencia", alt: "Icon Shine", url: "/experience" },
    { iconCDN: "/icons/icons8-stack-96.png", title: "Stack", alt: "Icon Stack", url: "/stack" },
    { iconCDN: "/icons/icons8-launch-96.png", title: "Proyectos", alt: "Icon Launch", url: "/projects" },
    { iconCDN: "/icons/icons8-graduation-cap-96.png", title: "Educación", alt: "Icon Graduation Cap", url: "/education" }
  ]

  externalLinks = [
    { iconCDN: "/icons/icons8-linkedin-96.png", title: "Linkedin", alt: "Icon Linkedin", url: "https://www.linkedin.com/in/katherine-domeq-gavilan/" },
    { iconCDN: "/icons/icons8-github-logo-96.png", title: "GitHub", alt: "Icon GitHub", url:"https://github.com/KatherineDG" },
    { iconCDN: "/icons/icons8-gmail-96.png", title: "Contacto", alt: "Icon Gmail", url: "mailto:katherinedomeqg@gmail.com"}
  ]

  interactionMenu() {
    this.isMenuOpen = !this.isMenuOpen
  }
}
