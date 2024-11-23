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
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
