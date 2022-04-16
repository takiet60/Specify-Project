import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../service/article.service';
import { Article } from '../../model/article.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public articles?: Article[] = []

  public articlePost: Article = new Article(0, '', '', '', '')

  constructor(
    private articleService: ArticleService,
  ) { }

  ngOnInit(): void {
    this.articleService.getAllArticles().subscribe(
      (response) => {
        this.articles = response
        console.log(this.articles)
      }
    )
  }

  addArticle() {

  }

  onSubmit() {
    this.articleService.createArticle(this.articlePost).subscribe()
  }
}
