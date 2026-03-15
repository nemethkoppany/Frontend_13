import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { INewTask } from '../tasks-model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {

  close = output<void>();
  create = output<INewTask>();
  inputTitle = signal("");
  inputSummary = signal("");
  inputDate = signal(new Date().toISOString().substring(0,10));

  onClose(){
    this.close.emit();
  }

  onCreate(){
    const newTask = {
      title: this.inputTitle(),
      summary: this.inputSummary(),
      dueDate: this.inputDate()
    }


    this.create.emit(newTask);
    this.onClose();
  }
}
