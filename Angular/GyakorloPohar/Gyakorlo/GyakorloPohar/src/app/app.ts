import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pohar } from './pohar/pohar';
import { UjPohar } from './uj-pohar/uj-pohar';
import { PoharService } from './pohar/pohar-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Pohar, UjPohar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = signal("Pohar");
  poharService = inject(PoharService);
}
