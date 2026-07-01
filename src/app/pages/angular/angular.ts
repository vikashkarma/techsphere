import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ARTICLES } from '../../data/articles';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-angular',
  imports: [RouterLink, CommonModule],
  templateUrl: './angular.html',
  styleUrl: './angular.css',
})
export class Angular {

  constructor(
  private title: Title,
  private meta: Meta
) {}

  ngOnInit(){
    this.title.setTitle('Angular Tutorials | TechSphere');

this.meta.updateTag({
  name: 'description',
  content: 'Learn Angular, components, routing, services, standalone components and interview questions.'
});
  }
  angularArticles = ARTICLES.filter(
  a => a.category === 'Angular'
);
}
