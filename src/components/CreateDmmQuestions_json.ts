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
        }
       },
       {
        "type": "text",
        "name": "question2",
        "title": "Akronym"
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
         "default": "Area of application",
         "de": "Anwendungsbereich"
        }
       },
       {
        "type": "comment",
        "name": "question5",
        "title": {
         "default": "Important sources and their intended use",
         "de": "Wichtige Quellen und ihr Verwendungszweck"
        }
       },
       {
        "type": "comment",
        "name": "question6",
        "title": {
         "default": "Differentiation from similar models and need for a new one",
         "de": "Abgrenzung von ähnlichen Modellen und Notwendigkeit eines neuen Modells"
        }
       },
       {
        "type": "comment",
        "name": "question7",
        "title": {
         "default": "Evaluation method",
         "de": "Evaluierungsmethode"
        }
       },
       {
        "type": "text",
        "name": "question8",
        "title": {
         "default": "Available languages",
         "de": "Verfügbare Sprachen"
        }
       },
       {
        "type": "text",
        "name": "question9",
        "title": {
         "default": "Publication date",
         "de": "Veröffentlichungsdatum"
        },
        "inputType": "date"
       },
       {
        "type": "matrixdynamic",
        "name": "question10",
        "title": {
         "default": "Authors",
         "de": "Autoren"
        },
        "columns": [
         {
          "name": "question10-1",
          "title": "Name",
          "cellType": "text"
         },
         {
          "name": "question10-2",
          "title": "Organisation",
          "cellType": "text"
         },
         {
          "name": "question10-3",
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
        "name": "question11",
        "title": {
         "default": "Theoretical foundations (optional - link to scientific publication)",
         "de": "Theoretische Grundlagen (optional - Link zu wissenschaftlicher Veröffentlichung)"
        }
       },
       {
        "type": "comment",
        "name": "question12",
        "title": {
         "default": "Description of the maturity level, its dimensions and their granularity",
         "de": "Beschreibung des Reifegrads, der Dimensionen und deren Granularität"
        }
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

export { CreateDmmQuestions };
