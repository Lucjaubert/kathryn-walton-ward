import { Injectable } from '@angular/core';
import { Router, Scroll } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollToTopService {
  constructor(private router: Router) {
    this.router.events.pipe(
      filter(e => e instanceof Scroll)
    ).subscribe(() => {
      window.scroll(0, 0);
    });
  }
}
