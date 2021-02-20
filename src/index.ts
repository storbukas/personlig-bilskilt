import express = require('express');
import { AMBASSADE_SKILT, MILITÆR_SKILT, RALLY_SKILT, settFarger, SVALBARD_SKILT, VANLIG_SKILT, VANLIG_SKILT_SVART_FLAGGBÅND, VAREBIL_SKILT } from './fargekoder';
import { genererBilskilt } from './util';

const PORT = Number(process.env.PORT) || 8080;
const app = express();

app.get('/svart/:kjennemerke', (req, res) => {
  let kjennemerke = req.params.kjennemerke;

  genererBilskilt(res, kjennemerke, VANLIG_SKILT_SVART_FLAGGBÅND);
});

app.get('/varebil/:kjennemerke', (req, res) => {
  let kjennemerke = req.params.kjennemerke;

  genererBilskilt(res, kjennemerke, VAREBIL_SKILT);
});

app.get('/svalbard/:kjennemerke', (req, res) => {
  let kjennemerke = req.params.kjennemerke;

  genererBilskilt(res, kjennemerke, SVALBARD_SKILT);
});

app.get('/ambassade/:kjennemerke', (req, res) => {
  let kjennemerke = req.params.kjennemerke;

  genererBilskilt(res, kjennemerke, AMBASSADE_SKILT);
});

app.get('/militaer/:kjennemerke', (req, res) => {
  let kjennemerke = req.params.kjennemerke;

  genererBilskilt(res, kjennemerke, MILITÆR_SKILT);
});

app.get('/rally/:kjennemerke', (req, res) => {
  let kjennemerke = req.params.kjennemerke;

  genererBilskilt(res, kjennemerke, RALLY_SKILT);
});

app.get(['/:kjennemerke', '/', '*'], (req, res) => {
  let kjennemerke = req.params.kjennemerke;

  genererBilskilt(res, kjennemerke, VANLIG_SKILT);
});

const server = app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

module.exports = server;
