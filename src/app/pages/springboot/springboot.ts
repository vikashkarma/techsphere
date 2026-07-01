import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ARTICLES } from '../../data/articles';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-springboot',
  imports: [RouterLink, CommonModule],
  templateUrl: './springboot.html',
  styleUrl: './springboot.css',
})
export class Springboot {

  constructor(
  private title: Title,
  private meta: Meta
) {}

ngOnInit(){
  this.title.setTitle('Spring Boot Tutorials | TechSphere');

this.meta.updateTag({
  name: 'description',
  content: 'Spring Boot tutorials, REST APIs, Security, JPA and interview questions.'
});
}

javaArticles = ARTICLES.filter(
  item => item.category === 'Spring Boot');

}
