import { Component, OnInit } from '@angular/core';
import { Set, SetsService } from '../../sets.service';

@Component({
  selector: 's-learning-set-list',
  templateUrl: './set-list.component.html',
  styleUrls: ['./set-list.component.scss'],
})
export class SetListComponent implements OnInit{

  constructor(private setService: SetsService) {}

  sets: Set[] = [];
  config: any;
  items = [
    'Alphabet',
    'Ascending',
    'Descending'
  ];
  wordCount: number[] = [];
  selectedSortOption : any;

  ngOnInit(): void{
    this.selectedSortOption = 'Alphabet';
    this.getAll();
    this.loadPage();
  }

  getAll(){
    this.setService.get().subscribe((data) => {
      this.sets = data;
      this.calcWordsCounts();
      this.sortWordsets();
    })
  }

  pageChanged (event: any){
    this.config.currentPage = event;
    this.calcWordsCounts();
  }

  loadPage = () => {
    this.config = {
      itemsPerPage: 8,
      currentPage: 1,
      ellipses : false
    };
  }

  calcWordsCounts() {
    this.wordCount = this.sets
    .slice((this.config.currentPage - 1) * this.config.itemsPerPage, this.config.currentPage * this.config.itemsPerPage)
    .map((sets) => sets.cards.length || 0);
  }

  sortWordsets() {
    if (this.selectedSortOption === 'Alphabet') {
      this.sets.sort((a, b) => a.name.localeCompare(b.name));
    } else if (this.selectedSortOption === 'Ascending') {
      this.sets.sort((a, b) => a.cards.length - b.cards.length);
    } else if (this.selectedSortOption === 'Descending') {
      this.sets.sort((a, b) => b.cards.length - a.cards.length);
    }
    this.calcWordsCounts();
  }
}
