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
  selectedSortOption : any;
  searchKeyword!: string;

  ngOnInit(): void{
    this.selectedSortOption = 'Alphabet';
    this.getAll();
    this.loadPage();
  }

  getAll(){
    this.gramsetService.get().subscribe((data) => {
      this.gramsets = data;
      this.calcGramcardsCounts();
      this.sortGramsets();
    })
  }

  pageChanged (event: any){
    this.config.currentPage = event;
    this.calcGramcardsCounts();
    this.search();
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

  sortGramsets() {
    if (this.selectedSortOption === 'Alphabet') {
      this.gramsets.sort((a, b) => a.name.localeCompare(b.name));
    } else if (this.selectedSortOption === 'Ascending') {
      this.gramsets.sort((a, b) => a.gramcards.length - b.gramcards.length);
    } else if (this.selectedSortOption === 'Descending') {
      this.gramsets.sort((a, b) => b.gramcards.length - a.gramcards.length);
    }
    this.calcGramcardsCounts();
  }

  search() {
    if (this.searchKeyword) {
      this.gramsetService.get().subscribe((data) => {
        const filteredGramsets = data.filter((gramset) =>
          gramset.name.toLowerCase().includes(this.searchKeyword.toLowerCase())
        );
        this.gramsets = filteredGramsets;
      });
    } else {
      this.getAll();
    }
  }
}
