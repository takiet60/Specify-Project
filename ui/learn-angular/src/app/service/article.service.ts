import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Article } from '../model/article.model';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private apiUrl = "http://localhost:5000/";

  public articles?: Observable<Article[]>

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };


  constructor(private httpClient: HttpClient) { }


  getAllArticles(): Observable<Article[]> {
    this.articles = this.httpClient.get<Article[]>(this.apiUrl + "articles")
    return this.articles
  }

  createArticle(article: Article): Observable<Article> {
    const body = JSON.stringify(article);
    console.log(body)
    console.log(this.apiUrl + "articles")
    return this.httpClient.post<Article>(this.apiUrl + "articles", body, this.httpOptions)
  }


  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      console.log(errorMessage)
      return errorMessage;
    });
  }
}
