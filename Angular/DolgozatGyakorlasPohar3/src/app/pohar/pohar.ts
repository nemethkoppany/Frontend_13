import { Component } from '@angular/core';
import { IPohar } from './pohar-model';
import { PoharService } from './pohar-service';
import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';

@Component({
  selector: 'app-pohar',
  imports: [CommonModule],
  templateUrl: './pohar.html',
  styleUrl: './pohar.css',
})
export class Pohar {

  @Input() pohar!: IPohar

  constructor(private poharService:PoharService){}

  torol(){
    this.poharService.torol(this.pohar.id)
  }
}
