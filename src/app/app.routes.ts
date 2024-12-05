import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: ()=> import('./pages/users/users.component').then(page => page.UsersComponent)
  },
];
