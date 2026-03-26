import { Component,inject,Input,signal } from '@angular/core';
import { PoharService } from './pohar-service';
import { IPohar } from './pohar-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pohar',
  imports: [CommonModule],
  templateUrl: './pohar.html',
  styleUrl: './pohar.css',
})
export class Pohar {

  @Input() pohar!: IPohar

  constructor(private poharservice:PoharService){}

  torol(){
    this.poharservice.torol(this.pohar.id)
  }

}
