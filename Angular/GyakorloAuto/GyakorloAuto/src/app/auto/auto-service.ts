import { Injectable, input, signal } from '@angular/core';
import { dummyAuto } from '../dummy-auto';
import { IAuto } from './auto-model';

@Injectable({ providedIn: 'root' })
export class AutoService {
  private auto = signal<IAuto[]>(dummyAuto);
  listaz() {
    return this.auto();
  }

  felvesz(ujAuto: IAuto) {
    this.auto.set([...this.auto(), ujAuto]);
  }

  torol(index: number) {
    const lista = this.auto();
    this.auto.set([...lista.slice(0, index), ...lista.slice(index + 1)]);
  }
}
