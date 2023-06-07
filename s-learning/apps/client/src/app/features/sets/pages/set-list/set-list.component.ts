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

  ngOnInit(): void{
    this.getAll();
    this.loadPage();
  }

  getAll(){
    this.setService.get().subscribe((data) => {
      this.sets = data;
    })
  }

  pageChanged (event: any){
    this.config.currentPage = event;
  }

  loadPage = () => {
    this.config = {
      itemsPerPage: 8,
      currentPage: 1,
      ellipses : false
    };
  }
}
