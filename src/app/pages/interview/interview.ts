import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-interview',
  imports: [],
  templateUrl: './interview.html',
  styleUrl: './interview.css',
})
export class Interview {
  constructor(
  private title: Title,
  private meta: Meta
) {}

ngOnInit(){
   this.title.setTitle('Interview Preparation | TechSphere');

this.meta.updateTag({
  name: 'description',
  content: 'Interview questions and answers for Java, Angular, Spring Boot and more.'
});
}

}
