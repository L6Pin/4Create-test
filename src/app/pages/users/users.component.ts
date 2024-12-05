import { Component, inject } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import { ModalComponent } from '../../components/modal/modal.component';
import { ModalService } from '../../components/modal/modal.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [TableComponent, ModalComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  private modalService = inject(ModalService);

  onAddUser = () => {
    this.modalService.openModal();
  };
}
