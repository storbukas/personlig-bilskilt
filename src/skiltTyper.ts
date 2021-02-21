export enum SkiltFarge {
  ramme = "SKILTRAMME_FARGE",
  bakgrunn = "SKILT_BAKGRUNNSFARGE",
  flaggBakgrunn = "FLAGG_BAKGRUNNSFARGE",
  tekstFarge = "TEKST_FARGE",
}

export enum SkiltType {
  vanlig = "VANLIG_SKILT",
  svart = "VANLIG_SKILT_SVART_FLAGGBÅND",
  varebil = "VAREBIL_SKILT",
  svalbard = "SVALBARD_SKILT",
  ambassade = "AMBASSADE_SKILT",
  militaer = "MILITÆR_SKILT",
  rally = "RALLY_SKILT",
}

export interface IFargeKode {
  skiltrammeFarge: string;
  skiltBakgrunnsfarge: string;
  flaggBakgrunnsfarge: string;
  tekstFarge: string;
}

export interface ISkiltType {
  skiltType: SkiltType;
  fargekoder: IFargeKode;
}
