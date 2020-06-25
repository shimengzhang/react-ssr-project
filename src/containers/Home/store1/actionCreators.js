import axios from 'axios';
import * as actionTypes from './actionTypes';

const changeListAction = (list) => ({
  type: actionTypes.CHANGE_HOME_LIST,
  list,
});

export const getHomeListAction = () => (dispatch) => axios.get('http://test.autohome.com.cn:3001/api/homelist.json')
  .then((res) => {
    const list = res.data.data;
    dispatch(changeListAction(list));
  });
