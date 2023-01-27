import { UserInterface } from './interfaces';

const key = {
  user: 'user',
};

export function saveUser(user: UserInterface) {
  try {
    localStorage.setItem(key.user, JSON.stringify(user));
  } catch (error) {
    console.log(error);
  }
}

export function getUser() {
  try {
    return localStorage.getItem(key.user);
  } catch (error) {
    console.log(error);
  }
}
