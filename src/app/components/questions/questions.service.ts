import { Injectable } from '@angular/core';
// import { Headers } from '@angular/http';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from 'src/models/Question';


@Injectable()
export class QuestionsService {
    constructor(private http: HttpClient) {
        console.log('Questions service initialised...');
    }

    getQuestions(): Observable<Question[]> {
        return this.http.get<Question[]>('https://chatbot-data-collection-api.herokuapp.com/api/questions');
    }

    addQuestion(question: Question): Observable<Question> {
        var headers = new Headers();
        return this.http.post<Question>('https://chatbot-data-collection-api.herokuapp.com/api/questions', question);
    }

    getDownloadLink(): string {
        return "https://chatbot-data-collection-api.herokuapp.com/api/getcsv";
    }
}