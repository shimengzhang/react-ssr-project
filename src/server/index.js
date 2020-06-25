import express from 'express';
import { matchRoutes } from 'react-router-config';
import { render } from './utils';
import { getStore } from '../store';
// import Routes from '../Routes';
import routes from '../Routes';

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('*', (req, res) => {
  // res.send(render(req));
  const store = getStore();
  const matchedRoutes = matchRoutes(routes, req.path);
  const promises = [];

  matchedRoutes.forEach((item) => {
    if (item.route.loadData) {
      promises.push(item.route.loadData(store));
    }
  });

  Promise.all(promises).then(() => {
    res.send(render(req, store, routes));
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
