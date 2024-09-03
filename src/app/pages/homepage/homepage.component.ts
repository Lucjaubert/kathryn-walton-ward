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
    // Titre et description récupérés de index.html pour uniformité
    this.seoService.setMetaTitle("Anglais du Vin - Kathryn Walton Ward");
    this.seoService.setMetaDescription("Découvrez 'Anglais du Vin' par Kathryn Walton Ward, le manuel définitif pour maîtriser l'anglais dans le secteur viticole.");

    // Vous pouvez également ajouter ici d'autres tags tels que les métadonnées Open Graph si votre SeoService le supporte
    this.seoService.setMetaTag({
      name: 'keywords',
      content: 'Anglais du Vin, Kathryn Walton Ward, éducation vin, manuel viticulture, vocabulaire viticole, formation sommelier'
    });
    this.seoService.setMetaTag({
      property: 'og:title',
      content: 'Anglais du Vin - Kathryn Walton Ward'
    });
    this.seoService.setMetaTag({
      property: 'og:type',
      content: 'book'
    });
    this.seoService.setMetaTag({
      property: 'og:image',
      content: 'https://www.kathrynwaltonward.com/assets/images/book-cover.png'
    });
    this.seoService.setMetaTag({
      property: 'og:description',
      content: 'Découvrez "Anglais du Vin" par Kathryn Walton Ward, le manuel définitif pour maîtriser l\'anglais dans le secteur viticole.'
    });
    this.seoService.setMetaTag({
      property: 'og:site_name',
      content: 'Kathryn Walton Ward'
    });
    this.seoService.setMetaTag({
      property: 'og:url',
      content: 'https://www.kathrynwaltonward.com/'
    });
  }

  redirectToMollat() {
    window.open('https://www.mollat.com/livres/3155090/kathryn-walton-ward-anglais-du-vin', '_blank');
  }

  scrollToAdditionalInfo(): void {
    const detailsSection = document.getElementById('additional-info-section');
    detailsSection?.scrollIntoView({ behavior: 'smooth' });
  }
}
