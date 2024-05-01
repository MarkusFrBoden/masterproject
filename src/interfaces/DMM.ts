export interface DMM {
    _id?: String;
    title: String;
    akronym:String;
    published:boolean;
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
    createdAt: String;
    updatedBy: String;
    updatedAt: String;
    SurveyJson: any;
    calculationLogic: any;
    [key: string]: any;
}