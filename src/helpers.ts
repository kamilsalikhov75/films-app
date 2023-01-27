import { UserInterface } from './interfaces';
import { user } from './mocks/user';

export function isValidUser(userObject: UserInterface) {
  if (
    user.login === userObject.login &&
    user.password === userObject.password
  ) {
    return true;
  }
  return false;
}
