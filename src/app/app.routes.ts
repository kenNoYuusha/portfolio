import { Routes } from '@angular/router';
import { LayoutComponent } from '../app/layout/layout.component';
import { HomeComponent } from '../app/pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      /* {
        path: 'reflective-video',
        loadComponent: () =>
          import(
            '../app/pages/reflective-video/reflective-video.component'
          ).then((page) => page.ReflectiveVideoComponent),
      }, */
      {
        path: 'classroom-activities',
        loadComponent: () =>
          import('../app/pages/diapositives/diapositives.component').then(
            (page) => page.DiapositivesComponent
          ),
      },
      {
        path: 'glossary',
        loadComponent: () =>
          import('../app/pages/glossary/glossary.component').then(
            (page) => page.GlossaryComponent
          ),
      },
      {
        path: 'extra-pieces',
        loadComponent: () =>
          import('../app/pages/extra-pieces/extra-pieces.component').then(
            (page) => page.ExtraPiecesComponent
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
