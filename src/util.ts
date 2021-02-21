import fs = require("fs");
import { IFargeKode, ISkiltType, SkiltFarge, SkiltType } from "./skiltTyper";
import VelgFargekode from "./fargekoder";

const settFarger = (fil: any, fargeKode: IFargeKode): any => {
  return fil
    .replace(SkiltFarge.ramme, fargeKode.skiltrammeFarge)
    .replace(SkiltFarge.bakgrunn, fargeKode.skiltBakgrunnsfarge)
    .replace(SkiltFarge.flaggBakgrunn, fargeKode.flaggBakgrunnsfarge)
    .replace(SkiltFarge.tekstFarge, fargeKode.tekstFarge);
};

const setSkiltType = (type: string) => {
  switch (type) {
    case "vanlig":
      return SkiltType.vanlig;
    case "svart":
      return SkiltType.svart;
    case "varebil":
      return SkiltType.varebil;
    case "svalbard":
      return SkiltType.svalbard;
    case "ambassade":
      return SkiltType.ambassade;
    case "militaer":
      return SkiltType.militaer;
    case "rally":
      return SkiltType.rally;
    default:
      return SkiltType.vanlig;
  }
};

export const velgSkiltType = (inputType: string): ISkiltType => {
  let skiltType = setSkiltType(inputType);
  return {
    skiltType,
    fargekoder: VelgFargekode(skiltType),
  };
};

export const genererBilskilt = (
  res: any,
  kjennemerke: string,
  skiltType: ISkiltType
) => {
  fs.readFile("media/personlig-bilskilt.svg", "utf-8", function (err, data) {
    if (err) {
      res.send("An error occurred.");
    } else {
      // set the content type based on the file
      res.setHeader("Content-Type", "image/svg+xml");
      if (kjennemerke) {
        if (kjennemerke.length > 7) {
          kjennemerke = kjennemerke.substring(0, 7);
        }
        res.send(
          settFarger(data, skiltType.fargekoder).replace(
            "GEEK",
            kjennemerke.toUpperCase()
          )
        );
      } else {
        res.send(settFarger(data, skiltType.fargekoder));
      }
    }
    res.end();
  });
};
