import { Component, signal,inject } from '@angular/core';
import { AutoService } from './auto/auto-service';
import { Auto } from './auto/auto';
import { UjAuto } from './uj-auto/uj-auto';

@Component({
  selector: 'app-root',
  imports: [Auto, UjAuto],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = signal("Autók");
  autoservice = inject(AutoService);
}
