import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GramTopic, GrammarTopicService } from '../services/grammar-topic.service';

@Component({
  selector: 's-learning-grammar-topic',
  templateUrl: './grammar-topic.component.html',
  styleUrls: ['./grammar-topic.component.scss'],
})
export class GrammarTopicComponent implements OnInit {

  gramList : GramTopic[] = [];
  config: any;
  displayEdit = "none";
  displayDelete = "none";
  displayAdd = "none";
  gramTopicEditForm! : FormGroup;
  gramTopicAddForm! : FormGroup;
  selectedGram!: GramTopic;
  editedGram!: GramTopic;

  constructor(
    private gramTopicService: GrammarTopicService,
    private formBuilder: FormBuilder,
    private router : Router
  ) {}

  ngOnInit(): void{
    this.getAllGramTopic();
    this.loadPage();
    this.gramTopicEditForm = this.formBuilder.group({
      name: [''],
      content: ['']
    });
    this.gramTopicAddForm = this.formBuilder.group({
      nameAdd: [''],
      contentAdd: ['']
    });
  }

  getAllGramTopic() {
    this.gramTopicService.get().subscribe((data) => {
      this.gramList = data;
    })
  }

  pageChanged (event: any){
    this.config.currentPage = event;
  }

  loadPage = () => {
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      ellipses : false
    };
  }

  openEditModal(gram: GramTopic) {
    this.selectedGram = gram;
    this.displayEdit = "block";
    this.gramTopicEditForm.patchValue({
      name: gram.name,
      content: gram.content
    });
  }

  openDeleteModal(gram: GramTopic) {
    this.selectedGram = gram;
    this.displayDelete = "block";
  }

  openAddModal() {
    this.displayAdd = "block";
  }

  onCloseHandled() {
    this.displayEdit = "none";
    this.displayDelete = "none";
    this.displayAdd = "none";
  }

  editTopic() {
    const id = this.selectedGram?._id;
    if(id){
      const updatedGram: GramTopic = {
        _id: id,
        name: this.gramTopicEditForm.value.name,
        content: this.gramTopicEditForm.value.content,
        gramcards: this.gramTopicEditForm.value.gramcards
      };

      this.gramTopicService.updateGramset(id, updatedGram).subscribe(() => {
        this.getAllGramTopic();
        this.onCloseHandled();
      });
    }
  }

  deleteTopic(){
    const id = this.selectedGram?._id;
    if(id){
      this.gramTopicService.deleteGramset(id).subscribe(() => {
        this.getAllGramTopic();
        this.onCloseHandled();
      })
    }
  }

  addTopic() {
    const addGram: GramTopic = {
      _id: undefined,
      name: this.gramTopicAddForm.value.nameAdd,
      content: this.gramTopicAddForm.value.contentAdd,
      gramcards: []
    };

    this.gramTopicService.createGramset(addGram).subscribe(() => {
      this.getAllGramTopic();
      this.onCloseHandled();
    });
  }
}
