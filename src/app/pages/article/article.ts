import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ARTICLES } from '../../data/articles';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article',
  standalone: true,
  imports : [CommonModule, RouterLink],
  templateUrl: './article.html',
  styleUrl: './article.css'
})
export class Article {

  route = inject(ActivatedRoute);

  relatedArticles: any[] = [];

  article: any;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {

      const id = params.get('id');

      this.article = ARTICLES.find(
        item => item.id === id
      );

      this.relatedArticles = ARTICLES.filter(
     item =>
        item.category === this.article?.category &&
        item.id !== this.article?.id
      );

    });
  }
}