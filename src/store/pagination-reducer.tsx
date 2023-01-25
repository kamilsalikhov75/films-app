import { AnyAction } from 'redux';
import { NEXT_PAGE, PREV_PAGE, RESET_PAGE } from './actions';

const initialState = {
  currentPage: 1,
  itemsCount: 10,
};
export function paginationReducer(
  state = initialState,
  action: { type: string; payload: AnyAction }
) {
  switch (action.type) {
    case NEXT_PAGE:
      return { ...state, currentPage: state.currentPage + 1 };
    case PREV_PAGE:
      return { ...state, currentPage: state.currentPage - 1 };
    case RESET_PAGE:
      console.log();
      return { ...state, currentPage: 1 };

    default:
      return state;
  }
}
