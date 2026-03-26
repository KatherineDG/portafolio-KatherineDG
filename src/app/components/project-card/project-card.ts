import { Component, input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {

  name = input<string>()
  image = input<String>()
  role = input<String>()
  type = input<String>()
  year = input<number>()
  description = input<String>()

}
