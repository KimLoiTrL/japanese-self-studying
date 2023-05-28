import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'topic',
    loadChildren: () => import('./features/sets/sets.module').then(m => m.SetsModule)
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
