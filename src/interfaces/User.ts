export interface User {
    _id?: String;
    name: String;
    email: String;
    password: String;
    organization: {
        name: String;
        identificationNumber: String;
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
    }
    termsAccepted: Boolean;
}