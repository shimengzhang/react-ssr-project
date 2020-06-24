import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';
import Home from './containers/Home';

const app = express();
const port = 3000;

const content = renderToString(<Home></Home>);

// 只要访问静态文件，就到根目录下的 public 目录下去找
app.use(express.static('public'));

app.get('/', (req, res) => res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <div id='root'>
    ${content}
    </div>
    <script src='./index.js'></script>
  </body>
  </html>
`));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
