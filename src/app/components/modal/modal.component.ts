import { Component, inject } from '@angular/core';
import { ModalService } from './modal.service';
import { AsyncPipe } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UsersService } from '../../pages/users/store/users.service';
import { UsersQuery } from '../../pages/users/store/users.query';
import { userUniqueNameValidator } from '../../validators/users.validators';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [AsyncPipe, ReactiveFormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  private modalService = inject(ModalService);
  private usersService = inject(UsersService);
  private usersQuery = inject(UsersQuery);

  isModalOpen$ = this.modalService.isModalOpen;

  addUserForm = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required],
      asyncValidators: [userUniqueNameValidator(this.usersQuery)],
    }),
    isActive: new FormControl(false),
  });

  onBackdropClick = (e: any) => {
    if (e.target.className === 'modal__backdrop') {
      this.modalService.closeModal();
    }
  };

  onCancel = () => {
    this.addUserForm.reset();
    this.modalService.closeModal();
    console.log(this.addUserForm.errors)
  };

  onSubmit = () => {
    this.usersService.add({
      id: this.usersQuery.getAll().length + 1,
      name: this.addUserForm.controls['name'].value!,
      active: this.addUserForm.controls['isActive'].value!,
    });
    this.onCancel();
  };
}
