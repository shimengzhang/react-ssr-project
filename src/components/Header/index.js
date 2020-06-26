import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
// import '../assets/css/reset.css';
import { connect } from 'react-redux';
import { actionCreators } from './store';

const Header = (props) => {
  const { login, handleGoLogin, handleGoLogout } = props;
  return (
    <div style={{ marginBottom: '20px' }}>
      <Link to='/'>首页</Link>&nbsp;&nbsp;
      {
        login
          ? <Fragment>
            <Link to='/write'>写文章</Link>&nbsp;&nbsp;
            <div onClick={handleGoLogout}>退出</div>
          </Fragment>
          : <div onClick={handleGoLogin}>登录</div>
      }

    </div>
  );
};

const mapStateToProps = (state) => ({
  login: state.header.login,
});

const mapDispatchToProps = (dispatch) => ({
  handleGoLogin() {
    dispatch(actionCreators.goLoginAction());
  },
  handleGoLogout() {
    dispatch(actionCreators.goLogoutAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
