import { Component, OnInit } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: Article = {};
  articles: Article[] = [
    {
      title: 'The Evolution of Async JavaScript: From Callbacks, to Promises, to Async/Await',
      url: 'https://james.codegym.vn/mod/quiz/view.php?id=10874'
    },
    {
      title: 'Nguyên tắc thiết kế REST API',
      url: 'https://james.codegym.vn/mod/assign/view.php?id=10872'
    },
    {
      title: 'Why You Only Need to Test with 5 Users',
      url: 'https://james.codegym.vn/mod/assign/view.php?id=10873'
    },
    {
      title: 'Let’s Build A Web Server. Part 1.',
      url: 'https://bezkoder.com/angular-10-crud-app/'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  addNewArticle() {
    this.articles.push(this.article);
  }
  
}
