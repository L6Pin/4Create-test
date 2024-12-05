import { Component, inject } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import { ModalComponent } from '../../components/modal/modal.component';
import { ModalService } from '../../components/modal/modal.service';
import { UsersService } from './store/users.service';
import { UsersQuery } from './store/users.query';
import { map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [TableComponent, ModalComponent, AsyncPipe],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  private modalService = inject(ModalService);
  private usersQuery = inject(UsersQuery);

  isAddUserEnabled$ = this.usersQuery.selectAll().pipe(
    map((users) => {
      console.log(users);
      return users.length < 5 && !users.some((user) => user.active === false)
        ? false
        : true;
    })
  );

  onAddUser = () => {
    this.modalService.openModal();
    console.log(this.usersQuery.getAll());
  };
}
