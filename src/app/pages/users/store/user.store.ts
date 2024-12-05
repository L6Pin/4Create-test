import { Injectable } from '@angular/core';
import { User } from './user.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface UsersState extends EntityState<User> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'users' })
export class UsersStore extends EntityStore<UsersState, User> {
  constructor() {
    super({
      entities: {
        '1': { id: 1,  name: 'Luka',  active: false, },
        '2': { id: 2, name: 'Ivan', active: true },
        '3': { id: 3, name: 'Katarina', active: true },
        '4': { id: 4, name: 'David', active: false },
      },
      ids: [1, 2, 3, 4],
    });
  }
}
