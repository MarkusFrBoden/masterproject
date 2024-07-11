export interface User {
    _id?: String;
    name: String;
    email: String;
    password: String;
    organization: {
        name: String;
        identificationNumber: String;
        PSO_SME: String;
        contactPerson:{
            name: String;
            role: String;
            email:String;
            telephone:String;
        };
        website: String;
        type: String;
        size: String;
        address:{
            street:String,
            postalcode:String,
            city:String,
            country:String
        };
        PIC: String;
        primarySektor: String;
        secondarySektor: String; 
        euDmaStatus: string;
        euDmaResults: EuResult[];
        lastDma:{
            id:String;
            title:String;
            createdBy:String;
            createdAt:String;
        };
    }
    termsAccepted: Boolean;
}

interface EuResult {
    dmaStatus: String;
    dim1: number;
    dim2: number;
    dim3: number;
    dim4: number;
    dim5: number;
    dim6: number;
    dimG: number;
}