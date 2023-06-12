import { Component, OnInit, ViewEncapsulation, HostListener, ViewChild} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { SwiperComponent  } from 'swiper/angular';
import SwiperCore, { Keyboard, Pagination, Navigation, Virtual } from 'swiper';
SwiperCore.use([Keyboard, Pagination, Navigation, Virtual]);

import { Card, CardsService } from '../../cards.service';
import { Set, SetsService } from '../../../sets/sets.service';

@Component({
  selector: 's-learning-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FlashcardComponent implements OnInit{

  @ViewChild(SwiperComponent) swiperContainerRef!: SwiperComponent;

  constructor(
    private cardService: CardsService,
    private setService: SetsService,
    private route: ActivatedRoute) {  }

  cards: Card[] = [];
  slides$ = new BehaviorSubject<string[]>(['']);
  flipped = false;
  currentItem: Card | null = null;
  setID : any;
  setTitle: any;
  sets: Set[] = [];

  toggle() {
    this.flipped = !this.flipped;
  }

  @HostListener('window:keydown', ['$event'])
  listenKeyDown(event: KeyboardEvent): void {
    switch (event.key) {
      case ' ':
        this.toggle();
        break;
      case 'ArrowRight':
        this.swiperContainerRef.swiperRef.slideTo(this.swiperContainerRef.swiperRef.activeIndex + 0.5);
        break;
      case 'ArrowLeft':
        this.swiperContainerRef.swiperRef.slideTo(this.swiperContainerRef.swiperRef.activeIndex - 0.5);
        break;
      default:
        break;
    }
  }

  onSwiper(swiper: any) {
    swiper.on('slideChange', () => {
      const activeIndex = swiper.activeIndex;
      this.currentItem = this.cards[activeIndex];
      this.flipped = false;
    });
  }

  ngOnInit(): void {
    // this.getAll();
    // this.showSlide();
    this.route.params.subscribe(params => {
      this.setID = params['id'];
      this.getCardBySet();
      this.loadSetInfo();
    });
  }

  getAll(){
    this.cardService.get().subscribe((data) => {
      this.cards = data;
      this.currentItem = this.cards[0];
    })
  }

  getCardBySet(){
    this.cardService.getCardsBySet(this.setID).subscribe((data) => {
      this.cards = data;
      this.currentItem = this.cards[0];
      this.slides$.next(
        Array.from({ length: this.cards.length })
      );
    })
  }

  loadSetInfo(): void {
    this.setService.getSetById(this.setID)
      .subscribe((set: Set) => this.setTitle = set.name);
  }

  // showSlide(){
  //   this.cardService.getCardsBySet(this.setID).subscribe((data) => {
  //     this.cards = data;
  //     this.slides$.next(
  //       Array.from({ length: this.cards.length })
  //     );
  //   })
  // }
}
