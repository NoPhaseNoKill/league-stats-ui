import express from 'express';
import request from 'request';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = process.env.PORT ?? 3001;
const requestHandlers = [cors(), bodyParser.json()];

app.use(requestHandlers);
app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/*', (req, res) => {
  const url = `https://api.steampowered.com${req.originalUrl}/?key=${process.env.STEAM_API}`;
  request.get(url, (error, steamRes, steamBody) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(steamBody);
  });
});
