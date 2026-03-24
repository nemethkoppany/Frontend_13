import { Component,Input,input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IPohar } from './pohar-model';
import { poharService } from './poharService';

@Component({
  selector: 'app-pohar',
  imports: [CommonModule],
  templateUrl: './pohar.html',
  styleUrl: './pohar.css',
})
export class Pohar {
  @Input() pohar!: IPohar;

  constructor(private service: poharService){}

  torol(){
    this.service.torol(this.pohar.id);
  }
}
