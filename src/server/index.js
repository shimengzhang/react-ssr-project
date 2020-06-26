import express from 'express';
import proxy from 'express-http-proxy';
import { matchRoutes } from 'react-router-config';
import { render } from './utils';
import { getStore } from '../store';
// import Routes from '../Routes';
import routes from '../Routes';

const app = express();
const port = 3000;

app.use(express.static('public'));

app.use('/api', proxy('http://test.autohome.com.cn:3001', {
  proxyReqPathResolver(req) {
    return `/api${req.url}`;
  },
}));

app.get('*', (req, res) => {
  const store = getStore(req);
  const matchedRoutes = matchRoutes(routes, req.path);
  const promises = [];

  matchedRoutes.forEach((item) => {
    if (item.route.loadData) {
      const promise = new Promise((resolve, reject) => {
        item.route.loadData(store).then(resolve).catch(resolve);
      });
      promises.push(promise);
    }
  });
  Promise.all(promises).then(() => {
    const context = {};
    const html = render(req, store, routes, context);
    console.log('context', context);

    if (context.action === 'REPLACE') {
      res.redirect(301, context.url);
    } else if (context.NotFound) {
      res.status(404);
    }
    res.send(html);
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
