import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ai',
  imports: [],
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
}
