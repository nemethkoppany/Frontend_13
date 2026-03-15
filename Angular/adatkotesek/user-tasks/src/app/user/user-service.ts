import { Injectable, signal } from "@angular/core";
import { DUMMY_USERS } from "../dummy-users";
 
@Injectable({ providedIn: 'root' })
export class UserService {
    private users = signal(DUMMY_USERS);
    private selectedUser = signal<any>(null);
    getUsers() {
        return this.users();
    }
 
    getSelectedUser() {
        return this.selectedUser();
    }
 
    getAvatar(id: string) {
       return 'users/'+  this.users().find(u => u.id === id)!.avatar;
        
    }

   

}