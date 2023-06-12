import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SwiperModule } from 'swiper/angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FlashcardComponent } from './pages/flashcard/flashcard.component';

const routes: Routes = [
  {
    path: 'flashcard/:id',
    component: FlashcardComponent
  }
]

@NgModule({
  declarations: [FlashcardComponent],
  imports: [
    CommonModule,
    SwiperModule,
    NgbModule,
    RouterModule.forChild(routes)
  ],
})
export class CardsModule {}
