import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  darkMode = signal<boolean>(false);

  handleChange() {
    console.log('si cabmio vamos bien');
  }
}
