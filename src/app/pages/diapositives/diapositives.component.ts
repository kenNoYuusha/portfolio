import { Component } from '@angular/core';

@Component({
  selector: 'app-diapositives',
  imports: [],
  templateUrl: './diapositives.component.html',
  styleUrl: './diapositives.component.css',
})
export class DiapositivesComponent {
  goToSlide(slideNumber: number): void {
    const slide = document.getElementById(`slide${slideNumber}`);
    slide?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    });
  }
}
