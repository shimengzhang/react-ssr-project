import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as homeReducer } from '../containers/Home/store1';
import { reducer as HeaderReducer } from '../components/Header/store';
import clientAxios from '../client/request';
import createServerAxios from '../server/request';

const reducer = combineReducers({
  home: homeReducer,
  header: HeaderReducer,
});

export const getStore = (req) => (createStore(reducer, applyMiddleware(thunk.withExtraArgument(createServerAxios(req)))));

export const getClientStore = () => {
  const defaultState = JSON.parse(JSON.stringify(window.context.state));
  return createStore(reducer, defaultState, applyMiddleware(thunk.withExtraArgument(clientAxios)));
};
