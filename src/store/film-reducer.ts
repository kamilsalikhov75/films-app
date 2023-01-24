import { films } from '../mocks/films';

export function filmReducer(
  state = films,
  action: { type: string; payload: {} }
) {
  switch (action.type) {
    default:
      return state;
  }
}
