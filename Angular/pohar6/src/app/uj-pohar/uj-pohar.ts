import { Component,inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PoharService } from '../pohar/pohar-service';
import { IPohar } from '../pohar/pohar-model';


@Component({
  selector: 'app-uj-pohar',
  imports: [FormsModule],
  templateUrl: './uj-pohar.html',
  styleUrl: './uj-pohar.css',
})
export class UjPohar {

  poharService = inject(PoharService);

  fajta:string="";
  szin:string="";
  fules:boolean=false

  mentes(){
    const ujPohar:IPohar = {
      id:Date.now(),
      fajta:this.fajta,
      szin:this.szin,
      fules:this.fules
    }
    this.poharService.felvesz(ujPohar);
    this.fajta="";
    this.szin="";
    this.fules=false
  }
}
