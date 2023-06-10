import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: '/welcome', pathMatch: 'full' },
  {
    path: 'vocabulary-pronunciation',
    loadChildren: () => import('./features/sets/sets.module').then(m => m.SetsModule)
  },
  {
    path: 'grammar',
    loadChildren: () => import('./features/gramsets/gramsets.module').then(m => m.GramsetsModule)
  },
  {
    path: 'cards',
    loadChildren: () => import('./features/cards/cards.module').then(m => m.CardsModule)
  }
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
