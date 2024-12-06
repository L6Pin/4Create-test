import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  isModalOpen: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  openModal = () => {
    this.isModalOpen.next(true);
  };

  closeModal = () => {
    this.isModalOpen.next(false);
  };
}
