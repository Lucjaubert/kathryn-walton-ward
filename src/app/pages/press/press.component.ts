import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-press',
  templateUrl: './press.component.html',
  styleUrls: ['./press.component.scss'],
  standalone: true, 
  imports: [CommonModule, RouterModule]
})
export class PressComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
