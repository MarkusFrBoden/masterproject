import type { DMA } from "../../interfaces/DMA.js"

// rekursive function to assign defaultValues to element names
function updateDefaultValueByName(element: any, name: string, newValue: any): void {
    if (element.name === name) {
        element.defaultValue = newValue;
    } else if (element.elements) {
        for (const nestedElement of element.elements) {
            updateDefaultValueByName(nestedElement, name, newValue);
        }
    }
}

//function to check object for key
function checkForKey(element: any, name: string): boolean {
    try {
        if (element.name === name) {
            return true;
        } else if (element.elements) {
            for (const nestedElement of element.elements) {
                if (checkForKey(nestedElement, name)) {
                    return true;
                }
            }
        }
        return false;
    } catch {
        return false;
    }
}

//fill dma default value with responses
export function fillSurveyResponses(dmaDetails: DMA, PSOSME: any) {
    const topLevel = dmaDetails.SurveyJson.pages[0];
    if (checkForKey(topLevel, `EUDMAQuestion1`)) {
        try {
            if (dmaDetails.responses.length > 0) {
                for (let i = 0; i < dmaDetails.SurveyJson.pages.length; i++) {
                    const topLevelElement = dmaDetails.SurveyJson.pages[i];
                    const response = dmaDetails.responses[0].data;
                    for (let y = 1; y < 26; y++) {
                        updateDefaultValueByName(topLevelElement, `EU${PSOSME}Question${y}`, response[`EU${PSOSME}Question${y}`]);
                    }
                }
            }
        }
        catch {
            console.log('not all default value EU questions were specialized')
        }
    }
    if (checkForKey(topLevel, 'BIM4VIDQuestion1') || checkForKey(dmaDetails.SurveyJson.pages[8], 'BIM4VIDQuestion1')) {
        try {
            if (dmaDetails.responses.length > 0) {
                for (let i = 0; i < dmaDetails.SurveyJson.pages.length; i++) {
                    const topLevelElement = dmaDetails.SurveyJson.pages[i];
                    const response = dmaDetails.responses[0].data;
                    for (let y = 1; y < 20; y++) {
                        updateDefaultValueByName(topLevelElement, `BIM4VIDQuestion${y}`, response[`BIM4VIDQuestion${y}`]);
                    }
                }
            }
        }
        catch {
            console.log('not all default value BIM questions were specialized')
        }
    }
    return {
        dmaDetails
    };
}