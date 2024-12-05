import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { User } from './user.model';
import { UsersStore } from './user.store';

@Injectable({ providedIn: 'root' })
export class UsersService {
  private usersStore = inject(UsersStore);

  add(user: User) {
    this.usersStore.add(user);
  }

  update(id: number, user: Partial<User>) {
    this.usersStore.update(id, user);
  }

  remove(id: number) {
    this.usersStore.remove(id);
  }
}
