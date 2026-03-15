import { Component, computed, EventEmitter, inject, input, Input, output, Output, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import {IUser} from "./user-model";
import { UserService } from './user-service';
import { TaskService } from '../tasks/task-service';


@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {


  private userService = inject(UserService);

  user = input.required<IUser>();
  select = output<string>();

  imagePath = computed(()=> this.userService.getAvatar(this.user().id));
 
  onSelectUser(){
    this.select.emit(this.user().id);
  }

}
