import { Component,signal,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IPohar } from './pohar-model';
import { Input } from '@angular/core';
import { PoharService } from './pohar-service';


@Component({
  selector: 'app-pohar',
  imports: [CommonModule],
  templateUrl: './pohar.html',
  styleUrl: './pohar.css',
})
export class Pohar {

  @Input() pohar!:IPohar

  constructor(private poharservice:PoharService){}

  torol(){
    this.poharservice.torol(this.pohar.id)
  }
}
