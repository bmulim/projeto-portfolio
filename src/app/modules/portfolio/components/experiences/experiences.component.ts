import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.inteface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {

  public arrayExperiences = signal<IExperiences[]>([
  {
    summary:{
      strong: "lorem ipsum dolor sit", 
      p: "lorem ipsum dolor sit amet, "
    },
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },

  {
    summary:{
      strong: "lorem ipsum dolor sit", 
      p: "lorem ipsum dolor sit amet, "
    },
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },

  {
    summary:{
      strong: "lorem ipsum dolor sit", 
      p: "lorem ipsum dolor sit amet, "
    },
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },

  {
    summary:{
      strong: "lorem ipsum dolor sit", 
      p: "lorem ipsum dolor sit amet, "
    },
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }
  ])
}
