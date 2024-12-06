import { inject, Injectable } from '@angular/core';
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
}
