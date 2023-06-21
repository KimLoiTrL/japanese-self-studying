import { Component, OnInit } from '@angular/core';
import { SetsService } from '../../sets.service';

@Component({
  selector: 's-learning-test-vocab',
  templateUrl: './test-vocab.component.html',
  styleUrls: ['./test-vocab.component.scss'],
})
export class TestVocabComponent implements OnInit{

  constructor(private setService: SetsService) {}

  sents : any[] = [];
  result : any[] = [];
  progressValue : any;
  showAnotherTestButton = false;

  ngOnInit(): void{
    this.FillmaskByNagisa();
  }

  FillmaskByNagisa(){
    this.setService.FillmaskByNagisa().subscribe((data) => {
      this.sents = data;
      // this.result = this.sents.map(item => item.results);
    })
  }

  showResults(item: any): void {
    item.showResults = !item.showResults;
    this.checkAllResultsClicked();
  }

  calculateProgress(score: number, results: any[]) {
    const maxScore = results[0].score * 1.1;
    const progress = (score / maxScore) * 100;
    return Math.round(progress);
  }

  speak(sequence: string) {
    const message = new SpeechSynthesisUtterance();
    message.text = sequence;
    message.lang = 'ja-JP';
    window.speechSynthesis.speak(message);
  }

  checkAllResultsClicked(): void {
    this.showAnotherTestButton = this.sents.every((item: any) => item.showResults);
  }

  refreshPage() {
    window.location.reload();
  }
}
