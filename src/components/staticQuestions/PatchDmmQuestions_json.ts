const PatchDmmQuestions = {
    "title": {
        "default": "Create DMM module",
        "de": "DMM-Modul erstellen"
    },
    "description": {
        "default": "Please answer the following questions to create a new DMM module",
        "de": "Bitte beantworten Sie die folgenden Fragen, um ein neues DMM-Modul zu erstellen"
    },
    "pages": [
        {
            "name": "page1",
            "elements": [
                {
                    "type": "text",
                    "name": "question1",
                    "title": {
                        "default": "Name of the module",
                        "de": "Name des Moduls"
                    },
                    "isRequired": true,
                    "defaultValue": ""
                },
                {
                    "type": "text",
                    "name": "question2",
                    "title": "Akronym",
                    "isRequired": true,
                    "defaultValue": "",
                    "validators": [
                        {
                         "type": "text",
                         "text": {
                          "default": "Please choose an acronym from 7 numbers and letters",
                          "de": "Bitte wählen Sie ein Akronym aus 7 Zahlen und Buchstaben"
                         },
                         "minLength": 3,
                         "maxLength": 7
                        },
                        {
                         "type": "regex",
                         "text": {
                          "default": "Please choose an acronym from 7 numbers and letters",
                          "de": "Bitte wählen Sie ein Akronym aus 7 Zahlen und Buchstaben"
                         },
                         "regex": "^[a-zA-Z0-9]*$"
                        }
                       ]
                },
                {
                    "type": "comment",
                    "name": "question3",
                    "title": {
                        "default": "Target group",
                        "de": "Zielgruppe"
                    },
                    "defaultValue": ""
                },
                {
                    "type": "comment",
                    "name": "question4",
                    "title": {
                        "default": "Demand for DMM in the area of application",
                        "de": "DMM-Bedarf für den Anwendungsbereich"
                    },
                    "defaultValue": ""
                },
                {
                    "type": "comment",
                    "name": "question5",
                    "title": {
                        "default": "Area of application",
                        "de": "Anwendungsbereich"
                    },
                    "defaultValue": ""
                },
                {
                    "type": "comment",
                    "name": "question6",
                    "title": {
                        "default": "Important sources and their intended use",
                        "de": "Wichtige Quellen und ihr Verwendungszweck"
                    },
                    "defaultValue": ""
                },
                {
                    "type": "comment",
                    "name": "question7",
                    "title": {
                        "default": "Differentiation from similar models and need for a new one",
                        "de": "Abgrenzung von ähnlichen Modellen und Notwendigkeit eines neuen Modells"
                    },
                    "defaultValue": ""
                },
                {
                    "type": "comment",
                    "name": "question8",
                    "title": {
                        "default": "Evaluation method",
                        "de": "Evaluierungsmethode"
                    },
                    "defaultValue": ""
                },
                {
                    "type": "text",
                    "name": "question9",
                    "title": {
                        "default": "Available languages",
                        "de": "Verfügbare Sprachen"
                    },
                    "defaultValue": ""
                },
                {
                    "type": "text",
                    "name": "question10",
                    "title": {
                        "default": "Publication date",
                        "de": "Veröffentlichungsdatum"
                    },
                    "inputType": "date",
                    "defaultValue": ""
                },
                {
                    "type": "matrixdynamic",
                    "name": "question11",
                    "title": {
                        "default": "Authors",
                        "de": "Autoren"
                    },
                    "defaultValue": [
                        {
                         "question11-1": "",
                         "question11-2": "",
                         "question11-3": ""
                        },
                        {
                         "question11-1": "",
                         "question11-2": "",
                         "question11-3": ""
                        },
                        {
                         "question11-1": "",
                         "question11-2": "",
                         "question11-3": ""
                        }
                       ],
                    "columns": [
                        {
                            "name": "question11_1",
                            "title": "Name",
                            "cellType": "text"
                        },
                        {
                            "name": "question11_2",
                            "title": "Organisation",
                            "cellType": "text"
                        },
                        {
                            "name": "question11_3",
                            "title": "Email",
                            "cellType": "text",
                            "validators": [
                                {
                                    "type": "email",
                                    "text": {
                                        "default": "Please enter a valid email address",
                                        "de": "Bitte geben Sie eine valide Email ein"
                                    }
                                }
                            ],
                            "inputType": "email"
                        }
                    ],
                    "choices": [
                        1,
                        2,
                        3,
                        4,
                        5
                    ],
                    "cellType": "text"
                }
            ],
            "title": {
                "default": "General attributes",
                "de": "Allgemeine Attribute"
            }
        },
        {
            "name": "page2",
            "elements": [
                {
                    "type": "comment",
                    "name": "question12",
                    "title": {
                        "default": "Theoretical foundations (optional - link to scientific publication)",
                        "de": "Theoretische Grundlagen (optional - Link zu wissenschaftlicher Veröffentlichung)"
                    },
                    "defaultValue": ""
                },
                {
                    "type": "comment",
                    "name": "question13",
                    "title": {
                        "default": "Description of the maturity level, its dimensions and their granularity",
                        "de": "Beschreibung des Reifegrads, der Dimensionen und deren Granularität"
                    },
                    "defaultValue": ""
                },
                {
                    "type": "file",
                    "name": "question14",
                    "title": {
                        "default": "You can upload a graphical overview of your maturity model here",
                        "de": "Hier können Sie eine grafische Übersicht über Ihr Reifegradmodell hochladen"
                    },
                    "acceptedTypes": "image/*",
                    "maxSize": 700000,
                    "storeDataAsText": false,
                    "waitForUpload": true,
                    "defaultValue": ""
                },
                {
                    "type": "comment",
                    "name": "question15",
                    "title": {
                        "default": "Description of the evaluation logic",
                        "de": "Beschreibung der Auswertungslogik"
                    },
                    "defaultValue": ""
                },
                {
                    "type": "file",
                    "name": "question16",
                    "title": {
                        "default": "Here you can upload a graphical overview of the calculation or a sample evaluation from your tool",
                        "de": "Hier können Sie eine grafische Übersicht über die Berechnung oder eine Musterauswertung aus Ihrem Tool hochladen"
                    },
                    "acceptedTypes": "image/*",
                    "maxSize": 700000,
                    "storeDataAsText": false,
                    "waitForUpload": true,
                    "defaultValue": ""
                }
            ],
            "title": {
                "default": "Detailed descriptions",
                "de": "Ausführliche Beschreibung"
            }
        }
    ],
    "showQuestionNumbers": "off",
    "showProgressBar": "top",
    "showPreviewBeforeComplete": "showAllQuestions",
    "widthMode": "static",
    "width": "80%",
    "fitToContainer": true
}

export { PatchDmmQuestions };
