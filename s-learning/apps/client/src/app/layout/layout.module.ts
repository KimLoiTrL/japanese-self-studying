import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NavigationComponent } from './navigation/navigation.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent
  }
]

@NgModule({
  declarations: [NavigationComponent, WelcomeComponent],
  imports: [CommonModule, RouterModule, RouterModule.forChild(routes)],
  exports: [NavigationComponent, WelcomeComponent],
})
export class LayoutModule {}
