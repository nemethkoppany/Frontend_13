import { Component, input, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IAuto } from './auto-model';
import { AutoService } from './auto-service';

@Component({
  selector: 'app-auto',
  imports: [CommonModule],
  templateUrl: './auto.html',
  styleUrl: './auto.css',
})
export class Auto {
  @Input() auto!: IAuto;
  @Input() index!: number

  constructor(private service: AutoService){}

  torol(){
    this.service.torol(this.index);
  }

}
