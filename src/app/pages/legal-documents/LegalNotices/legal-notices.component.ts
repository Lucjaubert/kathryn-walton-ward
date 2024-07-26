import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-legal-notices',
  templateUrl: './legal-notices.component.html',
  styleUrls: ['./legal-notices.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class LegalNoticesComponent {

  constructor() {
  }
}
