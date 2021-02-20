export interface FargeKode {
    skiltrammeFarge: string;
    skiltBakgrunnsfarge: string;
    flaggBakgrunnsfarge: string;
    tekstFarge: string;
}

export const VANLIG_SKILT: FargeKode = {
    skiltrammeFarge: "000000",
    skiltBakgrunnsfarge: "FFFFFF",
    flaggBakgrunnsfarge: "003399",
    tekstFarge: "000000"
}

export const VANLIG_SKILT_SVART_FLAGGBÅND: FargeKode = {
    skiltrammeFarge: "000000",
    skiltBakgrunnsfarge: "FFFFFF",
    flaggBakgrunnsfarge: "000000",
    tekstFarge: "000000"
}

export const VAREBIL_SKILT: FargeKode = {
    skiltrammeFarge: "000000",
    skiltBakgrunnsfarge: "019460",
    flaggBakgrunnsfarge: "003399",
    tekstFarge: "000000"
}

export const SVALBARD_SKILT: FargeKode = {
    skiltrammeFarge: "FFD51F",
    skiltBakgrunnsfarge: "000000",
    flaggBakgrunnsfarge: "003399",
    tekstFarge: "FFD51F"
}

export const AMBASSADE_SKILT: FargeKode = {
    skiltrammeFarge: "FE7400",
    skiltBakgrunnsfarge: "1A85FF",
    flaggBakgrunnsfarge: "003399",
    tekstFarge: "FE7400"
}

export const MILITÆR_SKILT: FargeKode = {
    skiltrammeFarge: "000000",
    skiltBakgrunnsfarge: "FFD51F",
    flaggBakgrunnsfarge: "003399",
    tekstFarge: "000000"
}

export const RALLY_SKILT: FargeKode = {
    skiltrammeFarge: "FFFFFF",
    skiltBakgrunnsfarge: "000000",
    flaggBakgrunnsfarge: "003399",
    tekstFarge: "FFFFFF"
}

export const settFarger = (fil: any, fargeKode: FargeKode): any => {
    return fil.replace("SKILTRAMME_FARGE", fargeKode.skiltrammeFarge)
        .replace("SKILT_BAKGRUNNSFARGE", fargeKode.skiltBakgrunnsfarge)
        .replace("FLAGG_BAKGRUNNSFARGE", fargeKode.flaggBakgrunnsfarge)
        .replace("TEKST_FARGE", fargeKode.tekstFarge)
        .replace("TEKST_FARGE", fargeKode.tekstFarge);
}