import { genres } from '../mocks/genres';

export function genreReducer(
  state = genres,
  action: { type: string; payload: {} }
) {
  switch (action.type) {
    default:
      return state;
  }
}
