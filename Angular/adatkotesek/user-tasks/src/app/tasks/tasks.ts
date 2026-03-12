import { Component, input,computed,signal } from '@angular/core';
import { dummyTasks } from '../dummy-tasks';
import { DUMMY_USERS } from '../dummy-users';
import { Task } from './task/task';
@Component({
  selector: 'app-tasks',
  imports: [Task],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  task = signal(dummyTasks);
  userId = input.required<string>();
  userName = computed( ()=> DUMMY_USERS.find(u => u.id == this.userId())!.name);

  userTasks = computed(()=> this.task().filter( t => t.userId == this.userId() ));

  onDelete(id: string){
    this.task.set(this.task().filter(t =>t.id != id));
  }
}
