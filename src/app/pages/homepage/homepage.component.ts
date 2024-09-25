import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
    gsap.registerPlugin(ScrollTrigger);

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

  ngAfterViewInit(): void {
    gsap.fromTo(".mt-8", 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1.5, ease: "power2.out", scrollTrigger: {
        trigger: ".mt-8",
        start: 'top 80%',
        toggleActions: 'play none none none',
      }}
    );

    gsap.fromTo(".subtitle", 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1.5, ease: "power2.out", scrollTrigger: {
        trigger: ".subtitle",
        start: 'top 80%',
        toggleActions: 'play none none none',
      }}
    );

    gsap.fromTo(".press-link span", 
      { opacity: 0, y: 0 }, 
      { opacity: 1, y: 0, stagger: 0.1, duration: 1.5, ease: "power2.out", scrollTrigger: {
        trigger: ".press-link",
        start: 'top 80%',
        toggleActions: 'play none none none',
      }}
    );

    gsap.fromTo(".book-cover-container, .book-details, .col-md-7", 
      { opacity: 0, y: 100 }, 
      { opacity: 1, y: 0, duration: 1.5, ease: "power2.out", scrollTrigger: {
        trigger: ".book-cover-container",
        start: 'top 80%',
        toggleActions: 'play none none none',
      }}
    );

    gsap.fromTo(".info-author, .note-content, .img-fluid-note", 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, stagger: 0.2, duration: 1.5, ease: "power2.out", scrollTrigger: {
        trigger: "#additional-info-section",
        start: 'top 80%',
        toggleActions: 'play none none none',
      }}
    );

    gsap.fromTo(".author-info-additionnal, .img-fluid-author", 
      { opacity: 0, y: 100 }, 
      { opacity: 1, y: 0, duration: 1.5, ease: "power2.out", scrollTrigger: {
        trigger: ".author-info-additionnal",
        start: 'top 80%',
        toggleActions: 'play none none none',
      }}
    );
  }
}
