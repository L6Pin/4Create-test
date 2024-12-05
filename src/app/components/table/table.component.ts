import { Component, inject } from '@angular/core';
import { UsersQuery } from '../../pages/users/store/users.query';
import { AsyncPipe } from '@angular/common';
import { UsersService } from '../../pages/users/store/users.service';
import { User } from '../../pages/users/store/user.model';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  private usersQuery = inject(UsersQuery);
  private userService = inject(UsersService)

  users$ = this.usersQuery.selectAll();

  toggleIsUserActive(user: User){
    this.userService.update(user.id, {...user, active: !user.active})
  }
}
