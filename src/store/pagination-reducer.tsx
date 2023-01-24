import { AnyAction } from 'redux';

const initialState = {
  currentPage: 1,
  itemsCount: 10,
};

export function paginationReducer(
  state = initialState,
  action: { type: string; payload: AnyAction }
) {
  switch (action.type) {
    case 'NEXT_PAGE':
      return { ...state, currentPage: state.currentPage + 1 };
    case 'PREV_PAGE':
      return { ...state, currentPage: state.currentPage - 1 };

    default:
      return state;
  }
}
