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
  imports: [CommonModule, RouterModule]
})
export class PressComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngAfterViewInit(): void {
    const pressBoxes = document.querySelectorAll('.press-box');

    pressBoxes.forEach((box, index) => {
      const isLeft = index % 2 === 0;

      // Animation pour les images
      gsap.fromTo(box.querySelector('.press-image-container'), 
        {
          x: isLeft ? -200 : 200,  // Position initiale à gauche ou à droite
          opacity: 0  // Masquer l'image avant l'animation
        }, 
        {
          x: 0,  // Arrive à sa position normale
          opacity: 1,  // Devenir visible
          duration: 1,  // Durée de l'animation
          scrollTrigger: {
            trigger: box,
            start: 'top 80%',
            toggleActions: 'play none none none',
          }
        });

      // Animation pour le texte
      gsap.fromTo(box.querySelector('.press-text-container'), 
        {
          y: 100,  // Le texte arrive du bas
          opacity: 0
        }, 
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: box,
            start: 'top 80%',
            toggleActions: 'play none none none',
          }
        });
    });
  }
}
