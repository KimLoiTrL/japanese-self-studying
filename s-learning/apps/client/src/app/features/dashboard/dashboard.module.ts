import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ManagerComponent } from './manager/manager.component';
import { VocabTopicComponent } from './vocab-topic/vocab-topic.component';
import { GrammarTopicComponent } from './grammar-topic/grammar-topic.component';
import { UserAdminComponent } from './user-admin/user-admin.component';

const routes: Routes = [
  {
    path: 'manager',
    component: ManagerComponent,
    children: [
      { path: '', redirectTo: 'user', pathMatch: 'full' },
      { path: 'user', component: UserAdminComponent },
      { path: 'grammar-topic', component: GrammarTopicComponent },
      { path: 'vocab-topic', component: VocabTopicComponent },
    ]
  },
];

@NgModule({
  declarations: [ManagerComponent, VocabTopicComponent, GrammarTopicComponent, UserAdminComponent],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    CommonModule,
    RouterModule.forChild(routes)],
})
export class DashboardModule {}
