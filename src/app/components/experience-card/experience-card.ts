import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-experience-card',
  imports: [],
  templateUrl: './experience-card.html',
  styleUrl: './experience-card.css',
})
export class ExperienceCard {

  rol = input<String>()
  site = input<String>()
  duration = input<String>()
  activities = input<String[]>()
}
