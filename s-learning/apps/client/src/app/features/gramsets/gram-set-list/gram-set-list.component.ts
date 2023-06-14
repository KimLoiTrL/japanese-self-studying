import { Component, OnInit } from '@angular/core';
import { Gramset, GramsetsService } from '../gramsets.service';

@Component({
  selector: 's-learning-gram-set-list',
  templateUrl: './gram-set-list.component.html',
  styleUrls: ['./gram-set-list.component.scss'],
})
export class GramSetListComponent implements OnInit{

  constructor(private gramsetService: GramsetsService) {}

  gramsets: Gramset[] = [];
  config: any;
  items = [
    'Alphabet',
    'Ascending',
    'Descending'
  ];
  gramcardsCount: number[] = [];

  ngOnInit(): void{
    this.getAll();
    this.loadPage();
  }

  getAll(){
    this.gramsetService.get().subscribe((data) => {
      this.gramsets = data;
      this.calcGramcardsCounts();
    })
  }

  pageChanged (event: any){
    this.config.currentPage = event;
    this.calcGramcardsCounts();
  }

  loadPage = () => {
    this.config = {
      itemsPerPage: 6,
      currentPage: 1,
      ellipses : false
    };
  }

  calcGramcardsCounts() {
    this.gramcardsCount = this.gramsets
    .slice((this.config.currentPage - 1) * this.config.itemsPerPage, this.config.currentPage * this.config.itemsPerPage)
    .map((gramset) => gramset.gramcards.length || 0);
  }
}
