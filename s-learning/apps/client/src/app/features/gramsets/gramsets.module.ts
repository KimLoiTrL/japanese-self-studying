import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

import { GramSetListComponent } from './gram-set-list/gram-set-list.component';

const routes: Routes = [
  {
    path: 'sets',
    component: GramSetListComponent
  }
]

@NgModule({
  declarations: [GramSetListComponent],
  imports: [
    CommonModule,
    NgxPaginationModule,

    RouterModule.forChild(routes)
  ],
})
export class GramsetsModule {}
