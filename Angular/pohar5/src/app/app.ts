import { Component, signal,inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pohar } from './pohar/pohar';
import { PoharService } from './pohar/pohar-service';
import { UjPohar } from './uj-pohar/uj-pohar';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Pohar,UjPohar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = signal("Pohar")

  poharService = inject(PoharService);
}
