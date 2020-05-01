import { Component, OnInit, ViewChild } from '@angular/core';
import { QuestionsService } from './questions.service';
import { Question } from 'src/models/Question';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  // get form
  @ViewChild('f', { static: false }) questionForm: NgForm;
  submitted = false;

  // question to send
  question: Question = new Question();

  // list of questions
  questions: Question[];

  showLabel = false;

  // define labels here
  labels = [{
    value: "ST:mood",
    text: "Mood"
  }, {
    value: "ST:origin",
    text: "Origin"
  },
  {
    value: "ST:identity",
    text: "Identity"
  }]

  constructor(private qService: QuestionsService) {
    this.qService.getQuestions().subscribe(questions => {
      // console.log(questions);
      this.questions = questions;
    });
  }

  ngOnInit() {

  }

  onHelp() {
    this.showLabel = true;
  }

  onSubmit() {
    // set attributes to form input
    this.question.input = this.questionForm.value.question;
    this.question.label = this.questionForm.value.label;

    this.submitted = true;
    this.qService.addQuestion(this.question).subscribe(
      (question) => {
        this.questions.push(question);
      }
    );

    this.questionForm.reset();
  }
}



// old on Submit
// event.preventDefault();
// console.log(this.questionString);

// var newQuestion: Question = {
//   input: this.questionString,
//   label: this.questionlabel
// }

// this.qService.addQuestion(newQuestion).subscribe(
//   (question) => {
//     this.questions.push(question);
//     this.questionString = '';
//     this.questionlabel = '';
//   }
// );
