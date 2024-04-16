export interface DMM {
    _id?: String;
    title: String;
    akronym:String;
    targetGroup: String;
    applicationArea:String;
    demand:String;
    primarySources:String;
    differentiation:String;
    evaluation:String;
    languages: String;
    publicationDate: Date;
    authors: [{ name: string; organization: string; email: string; }];
    foundations: String;
    descriptions: String;
    descriptionsImageLink: String;
    calculations: String;
    calculationsImageLink: String;
    createdBy: String;
    createdAt: Date;
    updatedBy: String;
    updatedAt: Date;
    SurveyJson: any;
    clculationLogic: any;
    [key: string]: any;
}