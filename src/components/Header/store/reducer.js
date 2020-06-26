import { CHANGE_LOGIN } from './actionTypes';

const defaultState = {
  login: false,
};
export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_LOGIN:
      return {
        ...state,
        login: action.login,
      };
    default:
      return state;
  }
};
