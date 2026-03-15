import { Component, input,computed,signal } from '@angular/core';
import { dummyTasks } from '../dummy-tasks';
import { DUMMY_USERS } from '../dummy-users';
import { Task } from './task/task';
import { NewTask } from './new-task/new-task';
import { INewTask } from './tasks-model';
import { TaskService } from './task-service';
@Component({
  selector: 'app-tasks',
  imports: [Task,NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  newTaskVisible = signal<boolean>(false);
  task = signal(dummyTasks);
  userId = input.required<string>();


  constructor(private taskService: TaskService){}

  userName = computed( ()=> DUMMY_USERS.find(u => u.id == this.userId())!.name);

  userTasks = computed(()=>this.taskService.getUserTasks(this.userId()));

  onDelete(id: string){
    this.taskService.deleteTask(id);
  }

  onEnableNewTask(){
    this.newTaskVisible.set(true);
  }

  onDisableNewTask(){
    this.newTaskVisible.set(false);
  }

  onCreateNewTask(newTask:INewTask){
    this.taskService.addNewTask(newTask,this.userId())
  }
}
