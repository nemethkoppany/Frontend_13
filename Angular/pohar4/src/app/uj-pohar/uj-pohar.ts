import { Component,inject } from '@angular/core';
import { PoharService } from '../pohar/pohar-service';
import { Ipohar } from '../pohar/pohar-model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-uj-pohar',
  imports: [FormsModule],
  templateUrl: './uj-pohar.html',
  styleUrl: './uj-pohar.css',
})
export class UjPohar {

  poharservice = inject(PoharService);

  fajta:string = "";
  szin:string=""
  fules:boolean=false

  mentes(){
    const ujPohar:Ipohar = {
      id:Date.now(),
      fajta:this.fajta,
      szin:this.szin,
      fules:this.fules
    }

    this.poharservice.felvesz(ujPohar);
    this.fajta="",
    this.szin=""
    this.fules=false
  }
}
