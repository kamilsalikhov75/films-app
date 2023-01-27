import { FilmInterface, FilmListInterface, UserInterface } from './interfaces';

const key = {
  user: 'user',
  filmList: 'filmList',
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

export function saveFilmList(filmList: FilmListInterface) {
  try {
    localStorage.setItem(key.filmList, JSON.stringify(filmList));
  } catch (error) {
    console.log(error);
  }
}

export function getFilmList() {
  try {
    return JSON.parse(localStorage.getItem(key.filmList) || 'undefined');
  } catch (error) {
    console.log(error);
  }
}
