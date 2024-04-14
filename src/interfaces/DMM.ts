export interface DMM {
    _id?: String;
    title: String;
    createdBy: String;
    createdAt: Date;
    updatedBy: String;
    updatedAt: Date;
    SurveyJson: any;
    CalculationLogic: any;
    [key: string]: any;
}