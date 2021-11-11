import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'clase-uno',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadChildren: () =>
      import('./folder/folder.module').then((m) => m.FolderPageModule),
  },
  {
    path: 'tipo-de-datos',
    loadChildren: () =>
      import('./pages/clase-uno/clase-uno.module').then(
        (m) => m.ClaseUnoPageModule
      ),
  },
  {
    path: 'variables',
    loadChildren: () =>
      import('./pages/clase-dos/clase-dos.module').then(
        (m) => m.ClaseDosPageModule
      ),
  },
  {
    path: 'operadores',
    loadChildren: () =>
      import('./pages/clase-tres/clase-tres.module').then(
        (m) => m.ClaseTresPageModule
      ),
  },
  {
    path: 'condicionales',
    loadChildren: () => import('./pages/condicionales/condicionales.module').then( m => m.CondicionalesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
