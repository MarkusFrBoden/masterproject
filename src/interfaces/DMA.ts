export interface DMA {
    _id?: String;
    title: String;
    createdFor: String;
    createdBy: String;
    createdAt: Date;
    updatedBy: String;
    updatedAt: Date;
    responses: Array<{ [key: string]: any }>;
    SurveyJson: any;
    [key: string]: any;
}