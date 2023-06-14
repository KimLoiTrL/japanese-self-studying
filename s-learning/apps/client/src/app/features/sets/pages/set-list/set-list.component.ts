import { Component, OnInit } from '@angular/core';
import { Set, SetsService } from '../../sets.service';
import { PaginationControlsComponent } from 'ngx-pagination';

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

  ngOnInit(): void{
    this.getAll();
    this.loadPage();
  }

  getAll(){
    this.setService.get().subscribe((data) => {
      this.sets = data;
      this.calcWordsCounts();
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
}
