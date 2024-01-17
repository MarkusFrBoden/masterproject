export interface Survey {
    title: Locale<string>;
    description: Locale<string>;
    completedHtml: Locale<string>;
    showQuestionNumbers: string;
    showProgressBar: string;
    pages: SurveyPage[];
    showPreviewBeforeComplete?: string;
    widthMode?: string;
    width?: string;
    fitToContainer?: boolean;
}

interface SurveyPage {
    name: string;
    title: Locale<string>;
    elements: SurveyElement[];
    description?: Locale<string>;
    html?: boolean;
}

interface SurveyElement {
    type: string;
    name: string;
    title?: Locale<string>;
    description?: Locale<string>;
    html?: boolean;
    elements?: SurveyElement[];
    imageLink?: Locale<string>;
    imageHeight?: number;
    imageWidth?: number;
    altText?: string;
    isRequired?: boolean;
    inputType?: string;
    choices?: SurveyChoice[];
    showOtherItem?: boolean;
    showPreviewBeforeComplete?: string;
    widthMode?: string;
    width?: string;
    fitToContainer?: boolean;
    items?: SurveyMultipleTextItem[];
    columns?: SurveyColumn[];
    rows?: SurveyRow[];
}

interface Locale<T> {
    de: T;
    en: T;
}

interface SurveyChoice {
    value: string;
    text: Locale<string>;
}

interface SurveyMultipleTextItem {
    name: string;
    title: Locale<string>;
}

interface SurveyColumn {
    value: string;
    text: Locale<string>;
}

interface SurveyRow {
    value: string;
    text: Locale<string>;
}