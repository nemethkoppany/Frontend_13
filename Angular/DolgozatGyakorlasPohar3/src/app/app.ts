import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PoharService } from './pohar/pohar-service';
import { Inject } from '@angular/core';
import { Pohar } from './pohar/pohar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Pohar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = signal("Pohar")

  poharService = inject(PoharService);
}
