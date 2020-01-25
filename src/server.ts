import express from 'express';
import request from 'request';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = process.env.PORT ?? 3001;
const requestHandlers = [cors(), bodyParser.json()];

app.use(requestHandlers);
app.listen(port, () => console.log(`Listening on port ${port}`));

const STEAM_API_KEY = '';

app.get('/*', (req, res) => {
  const url = `https://api.steampowered.com${req.originalUrl}/?key=${STEAM_API_KEY}`;
  request.get(url, (error, steamRes, steamBody) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(steamBody);
  });
});
