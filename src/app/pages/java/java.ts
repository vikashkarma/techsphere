import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ARTICLES } from '../../data/articles';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-java',
  imports: [RouterLink, CommonModule],
  templateUrl: './java.html',
  styleUrl: './java.css',
})
export class Java {

  javaArticles = ARTICLES.filter(
  item => item.category === 'Java'

);
}
