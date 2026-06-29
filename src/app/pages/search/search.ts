import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ARTICLES } from '../../data/articles';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search implements OnInit {

  results: any[] = [];

  constructor(private route: ActivatedRoute, private cdr: ChangeDetectorRef
) {
      console.log('Search component loaded');
        console.log('Search Component Instance', Math.random());
  }

  ngOnInit() {

  this.route.queryParams.subscribe(params => {

    const keyword = params['q']?.toLowerCase() || '';

    this.results = ARTICLES.filter(article =>
      article.title.toLowerCase().includes(keyword) ||
      article.category.toLowerCase().includes(keyword) ||
      article.description.toLowerCase().includes(keyword)
    );

    console.log('Results:', this.results);
    console.log('Count:', this.results.length);

    this.cdr.detectChanges(); // yahan
  });

}
}