import { films } from '../mocks/films';

const initialState = {
  intialFilms: films,
  filtredFilms: films,
};

export function filmReducer(
  state = initialState,
  action: { type: string; payload: {} }
) {
  switch (action.type) {
    default:
      return state;
  }
}
