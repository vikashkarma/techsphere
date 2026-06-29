import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-not-found',
  imports: [],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css',
})
export class NotFound {
  
  constructor(private title: Title){}

  ngOnInit(){
  this.title.setTitle('404 - Page Not Found | TechSphere');
}
}
