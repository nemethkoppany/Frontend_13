import { Component,inject,Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoService } from '../auto/auto-service';
import { IAuto } from '../auto/auto-model';

@Component({
  selector: 'app-uj-auto',
  imports: [FormsModule],
  templateUrl: './uj-auto.html',
  styleUrl: './uj-auto.css',
})
export class UjAuto {
  autoService = inject(AutoService);

  rendszam: string = "";
  evjarat: number = 1900;
  fogyasztas: number = 99;

  mentes(){
    const UjAuto: IAuto = {
      rendszam: this.rendszam,
      evjarat: this.evjarat,
      fogyszatas: this.fogyasztas
    };
    this.autoService.felvesz(UjAuto);
    this.rendszam = "";
    this.evjarat = 1900;
    this.fogyasztas = 99;
  }
}
