import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as homeReducer } from '../containers/Home/store1';
import clientAxios from '../client/request';
import serverAxios from '../server/request';

const reducer = combineReducers({
  home: homeReducer,
});

export const getStore = () => (createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverAxios))));

export const getClientStore = () => {
  const defaultState = JSON.parse(JSON.stringify(window.context.state));
  return createStore(reducer, defaultState, applyMiddleware(thunk.withExtraArgument(clientAxios)));
};
