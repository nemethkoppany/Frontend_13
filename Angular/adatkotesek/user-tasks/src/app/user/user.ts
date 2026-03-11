import { Component, computed, EventEmitter, input, Input, output, Output, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  //zone.js
  // @Input({required:true}) id!: string;
  // @Input({required:true}) avatar!: string;
  // @Input({required:true}) name!: string;
  // @Output() select = new EventEmitter<string>();
  //  get imagePath(){
  //   return "users/"+ this.avatar;
  // }

  // onSelectUser(){
  //   this.select.emit(this.id);
  // }

  //signal
  id = input.required<string>();
  avatar = input.required<string>();
  name = input.required<string>();
  select = output<string>();

  imagePath = computed(()=> "users/" + this.avatar());
 
  onSelectUser(){
    this.select.emit(this.id());
  }

  

  //zone.js (régebbi)
  // selectedUser = DUMMY_USERS[0];

  // get imagePath(){
  //   return 'users/' + this.selectedUser.avatar
  // }

  // onSelectUser(){
  //   console.log(`Selected user: ${this.selectedUser.name}`)
  //   const index = Math.floor( Math.random()*DUMMY_USERS.length)
  //   this.selectedUser = DUMMY_USERS[index]
  
  // }


  //signal (újabb)
  // selectedUser = signal(DUMMY_USERS[0]);
  // imagePath = computed(()=> 'users/' + this.selectedUser().avatar)
  // onSelectUser(){
  //   const index = Math.floor( Math.random()*DUMMY_USERS.length)
  //   this.selectedUser.set(DUMMY_USERS[index]);
  //}
}
