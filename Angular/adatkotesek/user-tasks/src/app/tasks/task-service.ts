import { Injectable, signal } from "@angular/core";
import { dummyTasks } from "../dummy-tasks";
import { INewTask } from "./tasks-model";

@Injectable({providedIn:"root"})
export class TaskService{
    private tasks = signal(dummyTasks);

    getUserTasks(userId: string){
        return this.tasks().filter(t => t.userId == userId);
    }

    deleteTask(taskId: string){
        this.tasks.set(this.tasks().filter(t =>t.id != taskId));
    }

    addNewTask(newTask: INewTask,userId: string){
      let id = "t" + this.tasks().length + 1

        this.tasks.set([...this.tasks(),{
      id:id,
      userId: userId, 
      title:newTask.title,
      summary:newTask.summary,
      dueDate:newTask.dueDate
    }])
    }
}