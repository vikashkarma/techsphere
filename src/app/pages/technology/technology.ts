import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-technology',
  imports: [],
  templateUrl: './technology.html',
  styleUrl: './technology.css',
})
export class Technology {

  constructor(
  private title: Title,
  private meta: Meta
) {}

ngOnInit(){
  this.title.setTitle('Technology Articles | TechSphere');

this.meta.updateTag({
  name: 'description',
  content: 'Latest technology news, trends, software development and innovations.'
});
}

}
