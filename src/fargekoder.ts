export interface FargeKode {
    skiltBakgrunnsfarge: string;
    flaggBakgrunnsfarge: string;
    tekstFarge: string;
}

export const VANLIG_SKILT: FargeKode = {
    skiltBakgrunnsfarge: "FFFFFF",
    flaggBakgrunnsfarge: "003399",
    tekstFarge: "000000"
}

export const VANLIG_SKILT_SVART_FLAGGBÅND: FargeKode = {
    skiltBakgrunnsfarge: "FFFFFF",
    flaggBakgrunnsfarge: "000000",
    tekstFarge: "000000"
}

export const VAREBIL_SKILT: FargeKode = {
    skiltBakgrunnsfarge: "019460",
    flaggBakgrunnsfarge: "003399",
    tekstFarge: "000000"
}

export const SVALBARD_SKILT: FargeKode = {
    skiltBakgrunnsfarge: "000000",
    flaggBakgrunnsfarge: "003399",
    tekstFarge: "FFFF00"
}

export const AMBASSADE_SKILT: FargeKode = {
    skiltBakgrunnsfarge: "1A85FF",
    flaggBakgrunnsfarge: "003399",
    tekstFarge: "FFFF00"
}

export const settFarger = (fil: any, fargeKode: FargeKode): any => {
    return fil.replace("SKILT_BAKGRUNNSFARGE", fargeKode.skiltBakgrunnsfarge)
        .replace("FLAGG_BAKGRUNNSFARGE", fargeKode.flaggBakgrunnsfarge)
        .replace("TEKST_FARGE", fargeKode.tekstFarge)
        .replace("TEKST_FARGE", fargeKode.tekstFarge);
}