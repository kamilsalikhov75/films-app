import { AnyAction } from 'redux';
import { LOG_OUT, SET_USER } from './actions';

const initialState = {
  login: '',
  password: '',
  isLogged: false,
};

export function userReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case SET_USER:
      const user = action.payload.user;
      return {
        ...state,
        login: user.login,
        password: user.password,
        isLogged: true,
      };
    case LOG_OUT:
      return initialState;
    default:
      return state;
  }
}
