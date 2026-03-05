import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  linkeds = [
    { iconCDN: "/icons/icons8-user-96.png", title: "Perfil"},
    { iconCDN: "/icons/icons8-shine-96.png", title: "Experiencia"},
    { iconCDN: "/icons/icons8-stack-96.png", title: "Stack"},
    { iconCDN: "/icons/icons8-launch-96.png", title: "Proyectos"},
    { iconCDN: "/icons/icons8-graduation-cap-96.png", title: "Educación"}
  ]
}
