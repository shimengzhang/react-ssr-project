import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store1';

const Home = (props) => {
  const { name, newsList, getHomeList } = props;
  useEffect(() => {
    if (newsList.length === 0) {
      getHomeList();
    }
  }, []);
  return (
    <div>
      <div>this is a {name}</div>
      {
        newsList.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))
      }
      <button onClick={() => { console.log('click'); }}>click</button>
    </div>
  );
};

// 这个方法，负责在服务器端渲染之前，把这个路由需要的数据提前加载好
Home.loadData = () => (store) => store.dispatch(actionCreators.getHomeListAction());

const mapStateToProps = (state) => ({
  name: state.home.name,
  newsList: state.home.newsList,
});

const mapDispatchToProps = (dispatch) => ({
  getHomeList() {
    dispatch(actionCreators.getHomeListAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
