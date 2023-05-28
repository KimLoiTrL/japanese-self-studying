import { Component, OnInit, ViewEncapsulation, HostListener } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import SwiperCore, { Keyboard, Pagination, Navigation, Virtual } from 'swiper';

SwiperCore.use([Keyboard, Pagination, Navigation, Virtual]);

@Component({
  selector: 's-learning-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FlashcardComponent {
  slides$ = new BehaviorSubject<string[]>(['']);
  flipped = false;

  toggle() {
    this.flipped = !this.flipped;
  }

  //space btn
  @HostListener('window:keydown.Space', ['$event'])
    listenSpace(e: KeyboardEvent): void {
      this.toggle();
    }

  ngOnInit(): void {
    this.slides$.next(
      Array.from({ length: 600 }).map((el, index) => `Slide ${index + 1}`)
    );
  }
}
