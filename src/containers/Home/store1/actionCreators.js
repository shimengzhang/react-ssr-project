import * as actionTypes from './actionTypes';

const changeListAction = (list) => ({
  type: actionTypes.CHANGE_HOME_LIST,
  list,
});

export const getHomeListAction = () => (dispatch, getState, axiosInstance) => axiosInstance.get('/api/homelist.json')
  .then((res) => {
    const list = res.data.data;
    dispatch(changeListAction(list));
  });
