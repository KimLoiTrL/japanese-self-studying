import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { VocabTopic, VocabTopicService } from '../services/vocab-topic.service';

@Component({
  selector: 's-learning-vocab-topic',
  templateUrl: './vocab-topic.component.html',
  styleUrls: ['./vocab-topic.component.scss'],
})
export class VocabTopicComponent implements OnInit{
  vocabList : VocabTopic[] = [];
  config: any;
  displayEdit = "none";
  displayDelete = "none";
  displayAdd = "none";
  vocabTopicEditForm! : FormGroup;
  vocabTopicAddForm! : FormGroup;
  selectedVocab!: VocabTopic;
  editedVocab!: VocabTopic;

  constructor(
    private vocabTopicService: VocabTopicService,
    private formBuilder: FormBuilder,
    private router : Router
  ) {}

  ngOnInit(): void{
    this.getAllVocabTopic();
    this.loadPage();
    this.vocabTopicEditForm = this.formBuilder.group({
      name: [''],
      imageUrl: ['']
    });
    this.vocabTopicAddForm = this.formBuilder.group({
      nameAdd: [''],
      imgUrlAdd: ['']
    });
  }

  getAllVocabTopic() {
    this.vocabTopicService.get().subscribe((data) => {
      this.vocabList = data;
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

  openEditModal(vocab: VocabTopic) {
    this.selectedVocab = vocab;
    this.displayEdit = "block";
    this.vocabTopicEditForm.patchValue({
      name: vocab.name,
      imageUrl: vocab.imageUrl
    });
  }

  openDeleteModal(vocab: VocabTopic) {
    this.selectedVocab = vocab;
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
    const id = this.selectedVocab?._id;
    if(id){
      const updatedVocab: VocabTopic = {
        _id: id,
        name: this.vocabTopicEditForm.value.name,
        imageUrl: this.vocabTopicEditForm.value.imageUrl,
        cards: this.vocabTopicEditForm.value.cards
      };

      this.vocabTopicService.updateVocabTopic(id, updatedVocab).subscribe(() => {
        this.getAllVocabTopic();
        this.onCloseHandled();
      });
    }
  }

  deleteTopic(){
    const id = this.selectedVocab?._id;
    if(id){
      this.vocabTopicService.deleteVocabTopic(id).subscribe(() => {
        this.getAllVocabTopic();
        this.onCloseHandled();
      })
    }
  }

  addTopic(){
    const addVocab: VocabTopic = {
      _id: undefined,
      name: this.vocabTopicAddForm.value.nameAdd,
      imageUrl: this.vocabTopicAddForm.value.imgUrlAdd,
      cards: []
    };

    this.vocabTopicService.createVocabTopic(addVocab).subscribe(() => {
      this.getAllVocabTopic();
      this.onCloseHandled();
    });
  }
}
