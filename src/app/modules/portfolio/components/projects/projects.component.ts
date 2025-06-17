import { Component, signal, inject } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/capa_nlw.webp',
      alt: 'Primeiro Projeto Feito',
      title: 'NLW eSports',
      width: '100px',
      height: '100px',
      description: 'Primeiro Projeto realizado junto a RocketSeat em um evento NLW, onde o objetivo era introduzir os participantes ao mundo do desenvolvimento web, utilizando HTML, CSS, tendo como tema o eSports.',
      links: [
        {
          name: 'NLW eSports',
          href: 'https://bmulim.github.io/NLW-eSports/'
        },
      ],
    },

    {
      src: 'assets/img/projects/vfull.png',
      alt: '',
      title: '',
      width: '100px',
      height: '100px',
      description: '',
      links: [
        {
          name: 'conheça o projeto',
          href: '#'
        },
      ],
    },
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data: data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}