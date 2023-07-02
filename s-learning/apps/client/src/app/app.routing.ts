import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './features/auth/auth.guard';

const routes: Routes = [
  {
    path: '', redirectTo: '/welcome', pathMatch: 'full' },
  {
    path: 'vocabulary-pronunciation',
    loadChildren: () => import('./features/sets/sets.module').then(m => m.SetsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'grammar',
    loadChildren: () => import('./features/gramsets/gramsets.module').then(m => m.GramsetsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'cards',
    loadChildren: () => import('./features/cards/cards.module').then(m => m.CardsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthGuard]
    // data: {
    //   role: 'admin',
    // }
  }
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
