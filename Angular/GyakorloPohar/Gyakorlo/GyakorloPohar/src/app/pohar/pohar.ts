import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IPohar } from './pohar-model';
import { PoharService } from './pohar-service';

@Component({
  selector: 'app-pohar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pohar.html',
  styleUrl: './pohar.css',
})
export class Pohar {
  @Input() pohar!: IPohar;

  constructor(private service: PoharService) {}

  torol() {
    this.service.torol(this.pohar.id);
  }
}
