import { Component, inject } from '@angular/core';
import { ModalService } from './modal.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {

  private modalService = inject(ModalService);

  isModalOpen$ = this.modalService.isModalOpen;

  onBackdropClick = (e: any) => {
    if (e.target.className === 'modal__backdrop') {
      this.modalService.closeModal();
    }
  };

  onCancel = () => {
    this.modalService.closeModal();
  };
}
