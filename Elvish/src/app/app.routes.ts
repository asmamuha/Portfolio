import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    loadChildren: () =>
      import('./layout/layout.route').then((mod) => mod.INDEX_ROUTES),
  },

];
