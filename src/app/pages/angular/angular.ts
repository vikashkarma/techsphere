import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-angular',
  imports: [],
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
}
