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

  ngOnInit(): void{
    this.getAll();
    this.loadPage();
  }

  getAll(){
    this.gramsetService.get().subscribe((data) => {
      this.gramsets = data;
    })
  }

  pageChanged (event: any){
    this.config.currentPage = event;
  }

  loadPage = () => {
    this.config = {
      itemsPerPage: 6,
      currentPage: 1,
      ellipses : false
    };
  }
}
