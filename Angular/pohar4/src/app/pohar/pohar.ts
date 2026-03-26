import { Component,signal,inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoharService } from './pohar-service';
import { Ipohar } from './pohar-model';

@Component({
  selector: 'app-pohar',
  imports: [CommonModule],
  templateUrl: './pohar.html',
  styleUrl: './pohar.css',
})
export class Pohar {
  @Input() pohar!:Ipohar

  constructor(private poharService:PoharService){}

  torol(){
    this.poharService.torol(this.pohar.id)
  }

}
