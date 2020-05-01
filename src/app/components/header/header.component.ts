import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions/questions.service';
import { Question } from 'src/models/Question';
// import { saveAs } from 'file-saver/FileSaver';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  questions: Question[];
  downloadLink: string;

  constructor(private qService: QuestionsService) {
    this.qService.getQuestions().subscribe(questions => {
      // console.log(questions);
      this.questions = questions;
    })

    this.downloadLink = this.qService.getDownloadLink();
  }

  ngOnInit(): void {
  }
}
