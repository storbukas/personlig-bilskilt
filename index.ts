import express = require('express');
import fs = require('fs');

const PORT = Number(process.env.PORT) || 8080;
const app = express();

app.get(['/:kjennemerke', '/', '*'], (req, res) => {
  let kjennemerke = req.params.kjennemerke;

  fs.readFile('personlig-kjennemerke.svg', 'utf-8', function (err, data) {
    if (err) {
      res.send("An error occurred.");
    } else {
      // set the content type based on the file
      res.setHeader('Content-Type', 'image/svg+xml');

      if (kjennemerke) {
        if (kjennemerke.length > 7) {
          kjennemerke = kjennemerke.substring(0, 7);
        }

        res.send(data.replace('GEEK', kjennemerke.toUpperCase()));
      } else {
        res.send(data);
      }
    }
    res.end();
  });
});

const server = app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

module.exports = server;
