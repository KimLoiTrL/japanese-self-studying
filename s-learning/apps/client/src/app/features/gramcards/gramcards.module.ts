import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SwiperModule } from 'swiper/angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { GramFlashcardComponent } from './gram-flashcard/gram-flashcard.component';

const routes: Routes = [
  {
    path: 'grammar-flashcard/:id',
    component: GramFlashcardComponent
  }
]

@NgModule({
  declarations: [GramFlashcardComponent],
  imports: [
    CommonModule,
    SwiperModule,
    NgbModule,
    RouterModule.forChild(routes)
  ],
})
export class GramcardsModule {}
