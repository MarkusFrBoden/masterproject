export interface EUResponse {
    responseDate: string;
    responseClient: string;
    data: {
        EUPSOQuestion1: string;
        EUPSOQuestion2: string;
        EUPSOQuestion3: string;
        EUPSOQuestion4: string;
        EUPSOQuestion5: string;
        EUPSOQuestion6: string;
        EUPSOQuestion7: string;
        EUPSOQuestion8: string;
        EUPSOQuestion9: string;
        EUPSOQuestion10: string;
        EUPSOQuestion11: {
            text1: string;
            text2: string;
            text3: string;
            text4: string;
        };
        EUPSOQuestion13: string;
        EUPSOQuestion14: string;
        EUPSOQuestion15: string[];
        EUPSOQuestion16: {
            [key: string]: {
                "Column 1": boolean;
                "Column 2": boolean;
            };
        };
        EUPSOQuestion17: string[];
        EUPSOQuestion18: string[];
        EUPSOQuestion19: string[];
        EUPSOQuestion20: string[];
        EUPSOQuestion21: string[];
        EUPSOQuestion22: string[];
        EUPSOQuestion23: {
            [key: string]: string;
        };
        EUPSOQuestion24: string[];
        EUPSOQuestion25: {
            [key: string]: string;
        };
    };
}