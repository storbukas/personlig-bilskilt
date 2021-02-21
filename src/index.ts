import express = require("express");
import { genererBilskilt, velgSkiltType } from "./util";

const PORT = Number(process.env.PORT) || 8080;
const app = express();

app.get("/:skiltType/:kjennemerke", (req, res) => {
  genererBilskilt(
    res,
    req.params.kjennemerke,
    velgSkiltType(req.params.skiltType)
  );
});

app.get(["/:kjennemerke", "/", "*"], (req, res) => {
  genererBilskilt(res, req.params.kjennemerke, velgSkiltType("vanlig"));
});

const server = app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

module.exports = server;
