import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from '../../components/menu/menu';

@Component({
  selector: 'app-profile',
  imports: [RouterOutlet, Menu],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {

}
