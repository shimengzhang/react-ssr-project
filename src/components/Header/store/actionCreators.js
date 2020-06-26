import { CHANGE_LOGIN } from './actionTypes';

const changeLoginAction = (login) => ({
  type: CHANGE_LOGIN,
  login,
});

export const getHeaderInfo = () => (dispatch, getState, axiosInstance) => axiosInstance.get('/api/isLogin.json')
  .then((res) => {
    const { data } = res.data;
    dispatch(changeLoginAction(data.login));
  });

export const goLoginAction = () => (dispatch, getState, axiosInstance) => axiosInstance.get('/api/goLogin.json', { params: { secret: '3244' } })
  .then((res) => {
    const { data } = res.data;
    dispatch(changeLoginAction(data.login));
  });

export const goLogoutAction = () => (dispatch, getState, axiosInstance) => axiosInstance.get('/api/goLogout.json')
  .then((res) => {
    const { data } = res.data;
    dispatch(changeLoginAction(data.login));
  });
