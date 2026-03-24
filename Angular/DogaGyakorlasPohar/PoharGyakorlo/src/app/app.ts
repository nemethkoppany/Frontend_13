import { Component, signal,inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pohar } from './pohar/pohar';
import { poharService } from './pohar/poharService';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Pohar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = signal("pohar")
  poharService = inject(poharService);
}
