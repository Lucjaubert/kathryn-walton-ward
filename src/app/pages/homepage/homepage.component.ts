import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class HomepageComponent implements OnInit {

  constructor(private seoService: SeoService) {}

  ngOnInit() {
    this.seoService.setMetaTitle("Anglais du Vin - Kathryn Walton Ward");
    this.seoService.setMetaDescription("Découvrez 'Anglais du Vin' par Kathryn Walton Ward, le manuel définitif pour maîtriser l'anglais dans le secteur viticole.");
    this.seoService.updateMetaTag('keywords', 'Anglais du Vin, Kathryn Walton Ward, éducation vin, manuel viticulture, vocabulaire viticole, formation sommelier');
    this.seoService.updateMetaTag('og:title', "Anglais du Vin - Kathryn Walton Ward", 'property');
    this.seoService.updateMetaTag('og:type', "book", 'property');
    this.seoService.updateMetaTag('og:image', "https://www.kathrynwaltonward.com/assets/images/book-cover.png", 'property');
    this.seoService.updateMetaTag('og:description', "Découvrez 'Anglais du Vin' par Kathryn Walton Ward, le manuel définitif pour maîtriser l'anglais dans le secteur viticole.", 'property');
    this.seoService.updateMetaTag('og:site_name', "Kathryn Walton Ward", 'property');
    this.seoService.updateMetaTag('og:url', "https://www.kathrynwaltonward.com/", 'property');
  }

  redirectToMollat() {
    window.open('https://www.mollat.com/livres/3155090/kathryn-walton-ward-anglais-du-vin', '_blank');
  }

  scrollToAdditionalInfo(): void {
    const detailsSection = document.getElementById('additional-info-section');
    detailsSection?.scrollIntoView({ behavior: 'smooth' });
  }
}
