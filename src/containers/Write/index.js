import React, { memo } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Write = memo((props) => {
  const { login } = props;
  if (login) {
    return (
        <div>写文章页面</div>
    );
  }
  return <Redirect to='/'/>;
});

const mapState = (state) => ({
  login: state.header.login,
});

export default connect(mapState, null)(Write);
