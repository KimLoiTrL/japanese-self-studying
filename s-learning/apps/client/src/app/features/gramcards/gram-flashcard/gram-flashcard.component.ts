import { Component, OnInit, ViewEncapsulation, HostListener, ViewChild, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { SwiperComponent  } from 'swiper/angular';
import SwiperCore, { Keyboard, Pagination, Navigation, Virtual } from 'swiper';
SwiperCore.use([Keyboard, Pagination, Navigation, Virtual]);

import { Gramcard, GramcardsService } from '../gramcards.service';
import { Gramset, GramsetsService } from '../../gramsets/gramsets.service';

@Component({
  selector: 's-learning-gram-flashcard',
  templateUrl: './gram-flashcard.component.html',
  styleUrls: ['./gram-flashcard.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GramFlashcardComponent implements OnInit{

  @ViewChild(SwiperComponent) swiperContainerRef!: SwiperComponent;

  constructor(
    private gramcardService: GramcardsService,
    private gramsetService: GramsetsService,
    private route: ActivatedRoute) {  }

  slides$ = new BehaviorSubject<string[]>(['']);
  flipped = false;
  gramCards: Gramcard[] = [];
  currentCard: Gramcard | null = null;
  structureItem: any[] = [];
  gramsetID : any;
  gramsetTitle: any;
  gramsets: Gramset[] = [];

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
      this.currentCard = this.gramCards[activeIndex];
      this.flipped = false;
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.gramsetID = params['id'];
      this.getGramcardsBySet();
      this.loadGramsetInfo();
    });
  }

  getAllGramcard(){
    this.gramcardService.getAll().subscribe((data) => {
      this.gramCards = data;
      this.currentCard = this.gramCards[0];
    })
  }

  getGramcardsBySet(){
    this.gramcardService.getGramcardsByGramset(this.gramsetID).subscribe((data) => {
      this.gramCards = data;
      this.currentCard = this.gramCards[0];
      this.slides$.next(
        Array.from({ length: this.gramCards.length })
      );
    })
  }

  loadGramsetInfo(): void {
    this.gramsetService.getGramsetById(this.gramsetID)
      .subscribe((gramset: Gramset) => this.gramsetTitle = gramset.name);
  }
}
