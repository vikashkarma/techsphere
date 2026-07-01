import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ARTICLES } from '../../data/articles';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ai',
  imports: [RouterLink, CommonModule],
  templateUrl: './ai.html',
  styleUrl: './ai.css',
})
export class Ai {
  constructor(
  private title: Title,
  private meta: Meta
) {}


 ngOnInit(){
  
this.title.setTitle('AI Articles | TechSphere');

this.meta.updateTag({
  name: 'description',
  content: 'Artificial Intelligence, Machine Learning, LLMs and AI tools articles.'
});
 }
 aiArticles = ARTICLES.filter(
  a => a.category === 'AI'
);
}
