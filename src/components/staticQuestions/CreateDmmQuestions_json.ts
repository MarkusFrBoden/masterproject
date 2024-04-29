const CreateDmmQuestions = {
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
        "isRequired": true
       },
       {
        "type": "text",
        "name": "question2",
        "title": "Akronym",
        "isRequired": true,
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
        }
       },
       {
        "type": "comment",
        "name": "question4",
        "title": {
         "default": "Demand for DMM in the area of application",
         "de": "DMM-Bedarf für den Anwendungsbereich"
        }
       },
       {
        "type": "comment",
        "name": "question5",
        "title": {
         "default": "Area of application",
         "de": "Anwendungsbereich"
        }
       },
       {
        "type": "comment",
        "name": "question6",
        "title": {
         "default": "Important sources and their intended use",
         "de": "Wichtige Quellen und ihr Verwendungszweck"
        }
       },
       {
        "type": "comment",
        "name": "question7",
        "title": {
         "default": "Differentiation from similar models and need for a new one",
         "de": "Abgrenzung von ähnlichen Modellen und Notwendigkeit eines neuen Modells"
        }
       },
       {
        "type": "comment",
        "name": "question8",
        "title": {
         "default": "Evaluation method",
         "de": "Evaluierungsmethode"
        }
       },
       {
        "type": "text",
        "name": "question9",
        "title": {
         "default": "Available languages",
         "de": "Verfügbare Sprachen"
        }
       },
       {
        "type": "text",
        "name": "question10",
        "title": {
         "default": "Publication date",
         "de": "Veröffentlichungsdatum"
        },
        "inputType": "date"
       },
       {
        "type": "matrixdynamic",
        "name": "question11",
        "title": {
         "default": "Authors",
         "de": "Autoren"
        },
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
        }
       },
       {
        "type": "comment",
        "name": "question13",
        "title": {
         "default": "Description of the maturity level, its dimensions and their granularity",
         "de": "Beschreibung des Reifegrads, der Dimensionen und deren Granularität"
        }
       },
       {
        "type": "file",
        "name": "question14",
        "title": {
         "default": "You can upload a graphical overview of your maturity model here",
         "de": "Hier können Sie eine grafische Übersicht über Ihr Reifegradmodell hochladen"
        },
        "acceptedTypes": "image/*",
        "storeDataAsText": false,
        "waitForUpload": true,
        "maxSize": 700000
       },
       {
        "type": "comment",
        "name": "question15",
        "title": {
         "default": "Description of the evaluation logic",
         "de": "Beschreibung der Auswertungslogik"
        }
       },
       {
        "type": "file",
        "name": "question16",
        "title": {
         "default": "Here you can upload a graphical overview of the calculation or a sample evaluation from your tool",
         "de": "Hier können Sie eine grafische Übersicht über die Berechnung oder eine Musterauswertung aus Ihrem Tool hochladen"
        },
        "acceptedTypes": "image/*",
        "storeDataAsText": false,
        "waitForUpload": true,
        "maxSize": 700000
       }
      ],
      "title": {
       "default": "Detailed descriptions",
       "de": "Ausführliche Beschreibung"
      }
     },
     {
      "name": "page3",
      "elements": [
       {
        "type": "checkbox",
        "name": "question17",
        "title": "Die folgenden Dimensionen werden direkt oder indirekt betrachtet:",
        "choices": [
            {
                "value": "Item 1",
                "text": {
                    "default": "Structure, Organization and Management",
                    "de": "Struktur, Organisation und Management"
                }
            },
            {
                "value": "Item 2",
                "text": {
                    "default": "Technology",
                    "de": "Technologie"
                }
            },
            {
                "value": "Item 3",
                "text": {
                    "default": "Digitalization Strategy",
                    "de": "Digitalisierungsstrategie"
                }
            },
            {
                "value": "Item 4",
                "text": {
                    "default": "Customers/ Users",
                    "de": "Kunden/ Nutzer"
                }
            },
            {
                "value": "Item 5",
                "text": {
                    "default": "Employees and Corporate Culture",
                    "de": "Mitarbeiter und Unternehmenskultur"
                }
            },
            {
                "value": "Item 6",
                "text": {
                    "default": "Transformation Process",
                    "de": "Transformationsprozess"
                }
            }
        ]
       },
       {
        "type": "checkbox",
        "name": "question18",
        "title": "Beantworten Sie für sich folgende Fragen:",
        "choices": [
            {
                "value": "Item 1",
                "text": {
                    "default": "Is the model generic?",
                    "de": "Ist das Modell generisch?"
                }
            },
            {
                "value": "Item 2",
                "text": {
                    "default": "Does the model have multiple dimensions?",
                    "de": "Hat das Modell mehrere Dimensionen?"
                }
            },
            {
                "value": "Item 3",
                "text": {
                    "default": "Are the dimensions subdivided into sub-dimensions? (high granularity)",
                    "de": "Sind die Dimensionen in Unterdimensionen unterteilt? (hohe Granularität)"
                }
            },
            {
                "value": "Item 4",
                "text": {
                    "default": "Are the dimensions differently weighted based on their importance for digital transformation?",
                    "de": "Sind die Dimensionen je nach ihrer Bedeutung für die digitale Transformation unterschiedlich gewichtet?"
                }
            },
            {
                "value": "Item 5",
                "text": {
                    "default": "Are the measurement points summarized into KPIs?",
                    "de": "Sind die Messpunkte in KPIs zusammengefasst?"
                }
            },
            {
                "value": "Item 6",
                "text": {
                    "default": "Do the maturity elements (KPIs or questions) also have different weights depending on their importance?",
                    "de": "Haben die Reifegradelemente (KPIs oder Fragen) ebenfalls unterschiedliche Gewichtungen je nach ihrer Bedeutung?"
                }
            },
            {
                "value": "Item 7",
                "text": {
                    "default": "Is the maturity level also determined for each dimension?",
                    "de": "Wird der Reifegrad auch für die einzelnen Dimensionen bestimmt?"
                }
            },
            {
                "value": "Item 8",
                "text": {
                    "default": "Is the model scalable and will it be further adapted to changes?",
                    "de": "Ist das Modell skalierbar und wird es weiterführend bearbeitet, um sich an Veränderungen anzupassen?"
                }
            },
            {
                "value": "Item 9",
                "text": {
                    "default": "Has the model already been used for assessing the digital maturity or even industrialized?",
                    "de": "Wurde das Modell bereits für die Bewertung des digitalen Reifegrads angewandt oder gar industrialisiert?"
                }
            }
        ]
       }
      ],
      "title": {
        "default": "Quality assurance",
        "de": "Qualitätssicherung"
       },
       "description": {
        "default": "This part is optional for self-assessment. The answers will not be saved.",
        "de": "Dieser Part ist fakultativ zur eigenen Überprüfung. Die Antworten werden nicht gespeichert."
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

export { CreateDmmQuestions };
