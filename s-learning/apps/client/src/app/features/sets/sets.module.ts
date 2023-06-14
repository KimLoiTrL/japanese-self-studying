import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

import { SetListComponent } from './pages/set-list/set-list.component';

const routes: Routes = [
  {
    path: 'sets',
    component: SetListComponent
  }
]

@NgModule({
  declarations: [SetListComponent],
  imports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule,

    RouterModule.forChild(routes)
  ]
})
export class SetsModule { }
