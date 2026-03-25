import { Component,Input } from '@angular/core';
import { IPohar } from './pohar-model';
import { CommonModule } from '@angular/common';
import { PoharService } from './pohar-service';

@Component({
  selector: 'app-pohar',
  imports: [CommonModule],
  templateUrl: './pohar.html',
  styleUrl: './pohar.css',
})
export class Pohar {

  @Input() pohar!:IPohar;
  
  constructor(private poharService:PoharService){}

  torol(){
    this.poharService.torol(this.pohar.id);
  }
}
