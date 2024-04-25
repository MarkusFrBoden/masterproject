export interface DMA {
    _id?: String;
    title: String;
    createdFor: String;
    createdBy: String;
    createdAt: Date;
    updatedBy: String;
    updatedAt: Date;
    euDMA:String;
    responses: any;
    SurveyJson: any;
    [key: string]: any;
}