import * as actionTypes from './actionTypes';

const defaultState = {
  name: 'dell 123 46 77',
  newsList: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_HOME_LIST:
      return {
        ...state,
        newsList: action.list,
      };
    default:
      return state;
  }
};
