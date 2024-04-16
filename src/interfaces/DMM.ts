export interface DMM {
    _id?: String;
    title: String;
    akonym:String;
    targetGroup: String;
    applicationArea:String;
    primarySources:String;
    differentiation:String;
    evaluation:String;
    languages: String;
    publicationDate: Date;
    authors: [{ name: string; organization: string; email: string; }];
    foundations: String;
    descriptions: String;
    createdBy: String;
    createdAt: Date;
    updatedBy: String;
    updatedAt: Date;
    SurveyJson: any;
    clculationLogic: any;
    [key: string]: any;
}