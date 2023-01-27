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
    return JSON.parse(localStorage.getItem(key.user) || '{}');
  } catch (error) {
    console.log(error);
  }
}

export function deleteUser() {
  localStorage.removeItem(key.user);
}
