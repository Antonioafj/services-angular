import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./components/card/card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, CommonModule],
  template: `
  <h1>Aula De Services</h1>
  <app-card></app-card>
  <router-outlet />
  
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'services';
}
