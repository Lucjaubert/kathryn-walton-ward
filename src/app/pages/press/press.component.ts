import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-press',
  templateUrl: './press.component.html',
  styleUrls: ['./press.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class PressComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngAfterViewInit(): void {
    const pressBoxes = document.querySelectorAll('.press-box');

    pressBoxes.forEach((box, index) => {
      const isLeft = index % 2 === 0;

      const imageContainer = box.querySelector('.press-image-container');
      const videoContainer = box.querySelector('.press-video-container');
      const quoteContainer = box.querySelector('.press-quote');
      const textContainer = box.querySelector('.press-text-container');

      const mediaElement = imageContainer || videoContainer || quoteContainer;

      if (mediaElement) {
        gsap.from(mediaElement, {
          x: isLeft ? -200 : 200,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: box,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      }

      if (textContainer) {
        gsap.from(textContainer, {
          y: 110,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: box,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      }
    });

    const homepageLink = document.querySelector('.homepage-link');

    homepageLink?.addEventListener('mouseenter', () => {
      gsap.to(homepageLink, { scale: 1.1, duration: 0.7, ease: 'ease-in-out' });
    });

    homepageLink?.addEventListener('mouseleave', () => {
      gsap.to(homepageLink, { scale: 1, duration: 0.7, ease: 'ease-in-out' });
    });

    gsap.fromTo(
      '.title-content h2',
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '.title-content',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );

    gsap.fromTo(
      '.title-content .homepage-link',
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '.title-content',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );

    this.setupModal('#showModalFigaro', '/assets/img/le-figaro-gd-format.jpg');
    this.setupModal('#showModalCuisine', '/assets/img/cuisine-et-vin-de-france-gd-format.jpg');
    this.setupModal('#showModalRVDF', '/assets/img/la-revue-du-vin-de-france-gd-format.jpg');
  }

  setupModal(buttonId: string, imagePath: string): void {
    const modal = document.getElementById('imageModal') as HTMLElement;
    const modalImg = document.getElementById('modalImage') as HTMLImageElement;
    const showModalButton = document.querySelector(buttonId) as HTMLElement;

    showModalButton?.addEventListener('click', function () {
      modal.style.display = 'block';
      modalImg.src = imagePath;
    });

    modalImg.addEventListener('click', function () {
      modal.style.display = 'none';
    });
  }
}
