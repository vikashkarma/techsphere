import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.html',
  styleUrl: './post.css'
})
export class Post {

  route = inject(ActivatedRoute);

  slug = this.route.snapshot.paramMap.get('slug');

}