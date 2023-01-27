import { AnyAction } from 'redux';
import { LOG_OUT, LOG_IN } from './actions';

const initialState = {
  isLogged: false,
};

export function userReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isLogged: true,
      };
    case LOG_OUT:
      return initialState;
    default:
      return state;
  }
}
