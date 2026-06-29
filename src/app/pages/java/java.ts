import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ARTICLES } from '../../data/articles';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-java',
  imports: [RouterLink, CommonModule],
  templateUrl: './java.html',
  styleUrl: './java.css',
})
export class Java {

  constructor(
  private title: Title,
  private meta: Meta
) {}

ngOnInit() {

  this.title.setTitle('Java Tutorials & Interview Questions | TechSphere');

  this.meta.updateTag({
    name: 'description',
    content: 'Java tutorials, interview questions, OOP concepts and programming articles.'
  });

}
   
  javaArticles = ARTICLES.filter(
  item => item.category === 'Java'

);
}
