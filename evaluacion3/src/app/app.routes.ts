import { Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./paginas/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
