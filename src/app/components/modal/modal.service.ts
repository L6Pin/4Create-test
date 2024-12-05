import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  isModalOpen: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  openModal = () => {
    this.isModalOpen.next(true);
    console.log("Open")
  };

  closeModal = () => {
    this.isModalOpen.next(false);
    console.log("closed")
  };
}
