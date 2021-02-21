import { IFargeKode, SkiltType } from "./skiltTyper";

const VelgFargekode = (skiltType: SkiltType): IFargeKode => {
  switch (skiltType) {
    case SkiltType.ambassade:
      return AMBASSADE_SKILT;
    case SkiltType.militaer:
      return MILITÆR_SKILT;
    case SkiltType.rally:
      return RALLY_SKILT;
    case SkiltType.svalbard:
      return SVALBARD_SKILT;
    case SkiltType.varebil:
      return VAREBIL_SKILT;
    case SkiltType.vanlig:
      return VANLIG_SKILT;
    case SkiltType.svart:
      return VANLIG_SKILT_SVART_FLAGGBÅND;
    default:
      return VANLIG_SKILT;
  }
};

const VANLIG_SKILT: IFargeKode = {
  skiltrammeFarge: "000000",
  skiltBakgrunnsfarge: "FFFFFF",
  flaggBakgrunnsfarge: "003399",
  tekstFarge: "000000",
};

const VANLIG_SKILT_SVART_FLAGGBÅND: IFargeKode = {
  skiltrammeFarge: "000000",
  skiltBakgrunnsfarge: "FFFFFF",
  flaggBakgrunnsfarge: "000000",
  tekstFarge: "000000",
};

const VAREBIL_SKILT: IFargeKode = {
  skiltrammeFarge: "000000",
  skiltBakgrunnsfarge: "019460",
  flaggBakgrunnsfarge: "003399",
  tekstFarge: "000000",
};

const SVALBARD_SKILT: IFargeKode = {
  skiltrammeFarge: "FFD51F",
  skiltBakgrunnsfarge: "000000",
  flaggBakgrunnsfarge: "003399",
  tekstFarge: "FFD51F",
};

const AMBASSADE_SKILT: IFargeKode = {
  skiltrammeFarge: "FE7400",
  skiltBakgrunnsfarge: "1A85FF",
  flaggBakgrunnsfarge: "003399",
  tekstFarge: "FE7400",
};

const MILITÆR_SKILT: IFargeKode = {
  skiltrammeFarge: "000000",
  skiltBakgrunnsfarge: "FFD51F",
  flaggBakgrunnsfarge: "003399",
  tekstFarge: "000000",
};

const RALLY_SKILT: IFargeKode = {
  skiltrammeFarge: "FFFFFF",
  skiltBakgrunnsfarge: "000000",
  flaggBakgrunnsfarge: "003399",
  tekstFarge: "FFFFFF",
};

export default VelgFargekode;
