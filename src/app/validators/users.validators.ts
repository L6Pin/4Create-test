import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { UsersQuery } from '../pages/users/store/users.query';
import { debounceTime, map, take } from 'rxjs';

export function userUniqueNameValidator(
  usersQuery: UsersQuery
): AsyncValidatorFn {
  return (control: AbstractControl) => {
    return usersQuery.selectAll().pipe(
      debounceTime(1500),
      take(1),
      map((users) => {
        const userNameTaken = users.find(
          (user) => user.name.toLowerCase() === control.value.toLowerCase()
        );

        return userNameTaken ? { userNameExsists: true } : null;
      })
    );
  };
}
