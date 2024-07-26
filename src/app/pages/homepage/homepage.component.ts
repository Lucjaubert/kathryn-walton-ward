import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class HomepageComponent  {

  constructor() {}

  redirectToMollat() {
    window.open('https://www.mollat.com/livres/3155090/kathryn-walton-ward-anglais-du-vin', '_blank');
  }

  scrollToAdditionalInfo(): void {
    const detailsSection = document.getElementById('additional-info-section');
    detailsSection?.scrollIntoView({ behavior: 'smooth' });
  }
}
