import { Routes } from '@angular/router';

import { Java } from './pages/java/java';
import { Angular } from './pages/angular/angular';
import { Springboot } from './pages/springboot/springboot';
import { Ai } from './pages/ai/ai';
import { Interview} from './pages/interview/interview';
import { Technology } from './pages/technology/technology';
import { Home } from './components/home/home';
import { Post } from './pages/post/post';
import { Article } from './pages/article/article';
import { NotFound } from './pages/not-found/not-found';
import { Search } from './pages/search/search';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'java', component: Java },
  { path: 'angular', component: Angular },
  { path: 'springboot', component: Springboot },
  { path: 'ai', component: Ai },
  { path: 'interview', component: Interview },
  { path: 'technology', component: Technology },
  { path: 'post/:slug', component: Post },
  { path: 'article/:id', component: Article },
  { path: 'search', component: Search },
  { path: '**', component: NotFound }
  
];