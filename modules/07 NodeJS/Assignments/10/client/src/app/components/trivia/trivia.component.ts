import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/service/questions.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css']
})
export class TriviaComponent implements OnInit {
  submit: boolean;
  isTopTen: boolean;
  currentScore: number;
  isShowResult: boolean;
  scores: any[];

  constructor(public questionsService: QuestionsService) {
    this.submit = false;
    this.isTopTen = false;
    this.currentScore = 0;
    this.isShowResult = false;

    this.scores = [];
  }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    this.questionsService.checkAnswers(form);
    this.submit = true;
    const score = this.questionsService.correctAnswers;
    this.isTopTen = false;
    this.currentScore = 0;
    this.isShowResult = false;
    // const header = {method : "GET"}
  }

  isInTopTen(score){
    fetch(`localhost:7777/score?score=${score}`)
    .then(stream=>stream.json()
    .then(data=>{
      const result = data.result;
      if(!result){
        this.scores = data.scores;
        this.isShowResult = true;
      }
      else{
        this.isTopTen = true;
        this.isShowResult = false;
      }
      
    }))
  }

  sendScore(name){
  const header = {"method" : "POST", "mode": "CORS", body: JSON.stringify({"name": name, "score": this.currentScore}) };
  fetch("localhost:7777/score", header)
  .then(stream=>stream.json())
  .then(data=>{
    this.isTopTen = false;
    this.currentScore = 0;
    this.isShowResult = true;
    this.scores = data.scores;
  });
  }
}
