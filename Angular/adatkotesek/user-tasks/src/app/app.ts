import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { User } from "./user/user";
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from './tasks/tasks';
import { UserService } from './user/user-service';

@Component({
  selector: 'app-root',
  imports: [Header, User,Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
constructor(private userService: UserService){}

  users = computed(()=>this.userService.getUsers())
  selectedUserId: string | undefined;

  onSelectUser(id:string){
    this.selectedUserId = id;
  }
}
