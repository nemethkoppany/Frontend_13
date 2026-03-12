import { Component, EventEmitter, input, output, Output } from '@angular/core';
import { ITask } from '../tasks-model';
import { DatePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [DatePipe, UpperCasePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  task = input.required<ITask>();
  
  delete = output<string>();
  onDelete(){
    this.delete.emit(this.task().id);
  }
}

