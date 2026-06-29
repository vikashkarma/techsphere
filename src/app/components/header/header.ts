import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, FormsModule],
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

    searchTerm = '';

  constructor(private router: Router) {}

  search() {
    if (this.searchTerm.trim()) {
      this.router.navigate(['/search'], {
        queryParams: { q: this.searchTerm }
      });
    }
  }

}
