//calculation of eu or bim4vid answers
import type { DMA } from "../../interfaces/DMA.js"
import { type Ref } from "vue";

function checkForKey(element: any, name: string): boolean {
    if (element && element.name && element.name === name) {
        return true;
    } else if (element && element.elements) {
        for (const nestedElement of element.elements) {
            if (checkForKey(nestedElement, name)) {
                return true;
            }
        }
    }
    return false;
}

export function BIM4VIDcalculation (
    dmaDetails: Ref<DMA | undefined>,
    trafficLightKPI: Ref<Array<string>>
) {
     if (checkForKey(dmaDetails.value?.SurveyJson.pages[1], 'BIM4VIDQuestion2') || checkForKey(dmaDetails.value?.SurveyJson.pages[9], 'BIM4VIDQuestion2')) {
            const responses: any = dmaDetails.value?.responses[0].data;
            for (let i = 2; i < 20; i++) {
                const response = responses[`BIM4VIDQuestion${i}`];
                let color = 'green'; // Standardfarbe ist grün
                if (responses.BIM4VIDQuestion1 === 'Item 1') {
                    if (response > 2) {
                        color = 'green';
                    } else if (response === 2) {
                        color = 'yellow';
                    } else {
                        color = 'red';
                    }
                } else if (responses.BIM4VIDQuestion1 === 'Item 2') {
                    if (response > 1) {
                        color = 'green';
                    } else if (response === 1) {
                        color = 'yellow';
                    } else {
                        color = 'red';
                    }
                }
                trafficLightKPI.value.push(color);
            }
        } 
        return {
            BIM4VIDcalculation
        };

    }




