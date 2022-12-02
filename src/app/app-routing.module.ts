import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'ngrx', pathMatch: 'full' },
  {
    path: 'ngrx',
    loadChildren: () =>
      import('./layout/layout.module').then((m) => {
        return m.LayoutModule;
      }),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
