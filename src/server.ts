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
  const url = `https://oc1.api.riotgames.com${req.originalUrl}/?api_key=${process.env.RIOT_API_KEY}`;
  request.get(url, (error, steamRes, steamBody) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(steamBody);
  });
});
