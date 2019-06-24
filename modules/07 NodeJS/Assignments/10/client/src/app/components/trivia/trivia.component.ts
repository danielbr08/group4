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
  isShowResultNeeded: boolean;
  scores: any[];
  port: number;

  constructor(public questionsService: QuestionsService) {
    this.submit = false;
    this.isTopTen = false;
    this.currentScore = 0;
    this.isShowResultNeeded = false;
    this.port = 7777;

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
    this.isShowResultNeeded = false;
    this.checkIsInTopTen(score);
    // const header = {method : "GET"}
  }

  checkIsInTopTen(score){
    fetch(`http://localhost:${this.port}/score?score=${score}`)
    .then(stream=>stream.json()
    .then(data=>{
      const isNameSendNeeded = data.isNameSendNeeded;
      const scores = data.scores;
      console.log(isNameSendNeeded,scores);
      if(!isNameSendNeeded){
        this.scores = data.scores;
        this.isShowResultNeeded = true;
      }
      else{
        this.isTopTen = true;
        this.isShowResultNeeded = false;
      }
    }))
  }

  sendScore(name){
  const header = {method : "POST", mode: "CORS", body: JSON.stringify({name, score: this.currentScore} ) };
  fetch("localhost:7777/score", header)
  .then(stream=>stream.json())
  .then(data=>{
    this.isTopTen = false;
    this.currentScore = 0;
    this.isShowResultNeeded = true;
    this.scores = data.scores;
  });
  }
}
