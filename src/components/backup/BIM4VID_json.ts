const BIM4VID = {
    "title": "BIM4VID",
    "description": "BIM-DMM-Modul für Verkehrs-Infrastrukturbehörden in Deutschland",
    "pages": [
     {
      "name": "BIM4VIDPage1",
      "elements": [
       {
        "type": "html",
        "name": "explanationquestion1",
        "html": "<h6>HTML-Beschreibung Test</h6>"
       },
       {
        "type": "radiogroup",
        "name": "BIM4VIDQuestion1",
        "title": "Welche stellte die höchste von Ihnen betreute Straßenklasse dar?",
        "description": "Der Masterplan BIM Bundesfernstraßen",
        "choices": [
         {
          "value": "Item 1",
          "text": "Bundesfernstraßen"
         },
         {
          "value": "Item 2",
          "text": "Landstraßen"
         },
         {
          "value": "Item 3",
          "text": "Kreisstraßen"
         }
        ]
       }
      ],
      "title": "Selbsteinschätzung nach Masterplan"
     },
     {
      "name": "BIM4VIDPage2",
      "elements": [
       {
        "type": "panel",
        "name": "BIM4VIDPanel1",
        "elements": [
         {
          "type": "html",
          "name": "explanationquesion2",
          "html": "Implementierung der BIM-Methode"
         },
         {
          "type": "image",
          "name": "imagequestion2",
          "imageLink": "/masterproject/backend/uploads/1713259144314-MP_Implementierung.jpg",
          "imageFit": "cover",
          "imageHeight": "auto",
          "imageWidth": "100%"
         },
         {
          "type": "rating",
          "name": "BIM4VIDQuestion2",
          "title": " ",
          "hideNumber": true,
          "autoGenerate": false,
          "rateCount": 6,
          "rateValues": [
           {
            "value": 1,
            "text": "0"
           },
           {
            "value": 2,
            "text": "1"
           },
           {
            "value": 3,
            "text": "2"
           },
           {
            "value": 4,
            "text": "3"
           },
           {
            "value": 5,
            "text": "4"
           },
           {
            "value": 6,
            "text": "5"
           }
          ],
          "rateMax": 6
         },
         {
          "type": "html",
          "name": "explanationquesion3",
          "html": "BIM-Projekteinsatz"
         },
         {
          "type": "image",
          "name": "imagequestion3",
          "imageLink": "/masterproject/backend/uploads/1713259147598-MP_Projekteinsatz.jpg",
          "imageFit": "cover",
          "imageHeight": "auto",
          "imageWidth": "100%"
         },
         {
          "type": "rating",
          "name": "BIM4VIDQuestion3",
          "title": " ",
          "hideNumber": true,
          "autoGenerate": false,
          "rateCount": 6,
          "rateValues": [
           {
            "value": 1,
            "text": "0"
           },
           {
            "value": 2,
            "text": "1"
           },
           {
            "value": 3,
            "text": "2"
           },
           {
            "value": 4,
            "text": "3"
           },
           {
            "value": 5,
            "text": "4"
           },
           {
            "value": 6,
            "text": "5"
           }
          ],
          "rateMax": 6
         },
         {
          "type": "html",
          "name": "explanationquesion4",
          "html": "BIM-Anwendungsfälle (AwF)"
         },
         {
          "type": "image",
          "name": "imagequestion4",
          "imageLink": "/masterproject/backend/uploads/1713259151762-MP_BIM-AwF.jpg",
          "imageFit": "cover",
          "imageHeight": "auto",
          "imageWidth": "100%"
         },
         {
          "type": "rating",
          "name": "BIM4VIDQuestion4",
          "title": " ",
          "hideNumber": true,
          "autoGenerate": false,
          "rateCount": 6,
          "rateValues": [
           {
            "value": 1,
            "text": "0"
           },
           {
            "value": 2,
            "text": "1"
           },
           {
            "value": 3,
            "text": "2"
           },
           {
            "value": 4,
            "text": "3"
           },
           {
            "value": 5,
            "text": "4"
           },
           {
            "value": 6,
            "text": "5"
           }
          ],
          "rateMax": 6
         }
        ]
       }
      ],
      "title": "Selbsteinschätzung nach dem Masterplan"
     },
     {
      "name": "BIM4VIDPage3",
      "elements": [
       {
        "type": "panel",
        "name": "BIM4VIDPanel2",
        "elements": [
         {
          "type": "image",
          "name": "imagequestion5",
          "imageLink": "/masterproject/backend/uploads/1713257444443-01_BIM-Ziele&Strategie.png.jpg",
          "imageFit": "cover",
          "imageHeight": "auto",
          "imageWidth": "100%"
         },
         {
          "type": "rating",
          "name": "BIM4VIDQuestion5",
          "title": " ",
          "hideNumber": true,
          "autoGenerate": false,
          "rateCount": 6,
          "rateValues": [
           {
            "value": 1,
            "text": "0"
           },
           {
            "value": 2,
            "text": "1"
           },
           {
            "value": 3,
            "text": "2"
           },
           {
            "value": 4,
            "text": "3"
           },
           {
            "value": 5,
            "text": "4"
           },
           {
            "value": 6,
            "text": "5"
           }
          ],
          "rateMax": 6
         }
        ],
        "title": "BIM-Ziele und -Strategie"
       },
       {
        "type": "panel",
        "name": "BIM4VIDPanel3",
        "elements": [
         {
          "type": "html",
          "name": "explanationquestion6",
          "html": "Managementunterstüzung (BIM-Wissen auf Führungsebenen)"
         },
         {
          "type": "image",
          "name": "imagequestion6",
          "imageLink": "/masterproject/backend/uploads/1713257448054-02_ManagementunterstÃ¼tzung.jpg",
          "imageFit": "cover",
          "imageHeight": "auto",
          "imageWidth": "100%"
         },
         {
          "type": "rating",
          "name": "BIM4VIDQuestion6",
          "title": " ",
          "hideNumber": true,
          "autoGenerate": false,
          "rateCount": 6,
          "rateValues": [
           {
            "value": 1,
            "text": "0"
           },
           {
            "value": 2,
            "text": "1"
           },
           {
            "value": 3,
            "text": "2"
           },
           {
            "value": 4,
            "text": "3"
           },
           {
            "value": 5,
            "text": "4"
           },
           {
            "value": 6,
            "text": "5"
           }
          ],
          "rateMax": 6
         },
         {
          "type": "html",
          "name": "explanationquestion7",
          "html": "BIM-Bedeutung für die Organisation"
         },
         {
          "type": "image",
          "name": "imagequestion7",
          "imageLink": "/masterproject/backend/uploads/1713257452074-03_BIM-Bedeutung.jpg",
          "imageFit": "cover",
          "imageHeight": "auto",
          "imageWidth": "100%"
         },
         {
          "type": "rating",
          "name": "BIM4VIDQuestion7",
          "title": " ",
          "hideNumber": true,
          "autoGenerate": false,
          "rateCount": 6,
          "rateValues": [
           {
            "value": 1,
            "text": "0"
           },
           {
            "value": 2,
            "text": "1"
           },
           {
            "value": 3,
            "text": "2"
           },
           {
            "value": 4,
            "text": "3"
           },
           {
            "value": 5,
            "text": "4"
           },
           {
            "value": 6,
            "text": "5"
           }
          ],
          "rateMax": 6
         }
        ],
        "title": "Struktur, Organisation und Management"
       },
       {
        "type": "panel",
        "name": "BIM4VIDPanel4",
        "elements": [
         {
          "type": "html",
          "name": "explanationquestion8",
          "html": "BIM-Schulungen und -Zertifizierungen für Mitarbeiter"
         },
         {
          "type": "image",
          "name": "imagequestion8",
          "imageLink": "/masterproject/backend/uploads/1713257632312-04_BIM-Schulungen.jpg",
          "imageFit": "cover",
          "imageHeight": "auto",
          "imageWidth": "100%"
         },
         {
          "type": "rating",
          "name": "BIM4VIDQuestion8",
          "title": " ",
          "hideNumber": true,
          "autoGenerate": false,
          "rateCount": 6,
          "rateValues": [
           {
            "value": 1,
            "text": "0"
           },
           {
            "value": 2,
            "text": "1"
           },
           {
            "value": 3,
            "text": "2"
           },
           {
            "value": 4,
            "text": "3"
           },
           {
            "value": 5,
            "text": "4"
           },
           {
            "value": 6,
            "text": "5"
           }
          ],
          "rateMax": 6
         },
         {
          "type": "html",
          "name": "explanationquestion9",
          "html": "BIM-Mindset bei den Mitarbeitern"
         },
         {
          "type": "image",
          "name": "imagequestion9",
          "imageLink": "/masterproject/backend/uploads/1713257636277-05_BIM-Mindset.jpg",
          "imageFit": "cover",
          "imageHeight": "auto",
          "imageWidth": "100%"
         },
         {
          "type": "rating",
          "name": "BIM4VIDQuestion9",
          "title": " ",
          "hideNumber": true,
          "autoGenerate": false,
          "rateCount": 6,
          "rateValues": [
           {
            "value": 1,
            "text": "0"
           },
           {
            "value": 2,
            "text": "1"
           },
           {
            "value": 3,
            "text": "2"
           },
           {
            "value": 4,
            "text": "3"
           },
           {
            "value": 5,
            "text": "4"
           },
           {
            "value": 6,
            "text": "5"
           }
          ],
          "rateMax": 6
         }
        ],
        "title": "Menschen und Unternehmenskultur"
       },
       {
        "type": "panel",
        "name": "BIM4VIDPanel5",
        "elements": [
         {
          "type": "html",
          "name": "explanationquestion10",
          "html": "Informationsanforderungen nach ISO 19650-1"
         },
         {
          "type": "image",
          "name": "imagequestion10",
          "imageLink": "/masterproject/backend/uploads/1713257717567-06_IA.jpg",
          "imageFit": "cover",
          "imageHeight": "auto",
          "imageWidth": "100%"
         },
         {
          "type": "rating",
          "name": "BIM4VIDQuestion10",
          "title": " ",
          "hideNumber": true,
          "autoGenerate": false,
          "rateCount": 6,
          "rateValues": [
           {
            "value": 1,
            "text": "0"
           },
           {
            "value": 2,
            "text": "1"
           },
           {
            "value": 3,
            "text": "2"
           },
           {
            "value": 4,
            "text": "3"
           },
           {
            "value": 5,
            "text": "4"
           },
           {
            "value": 6,
            "text": "5"
           }
          ],
          "rateMax": 6
         },
         {
          "type": "html",
          "name": "explanationquestion11",
          "html": "Besondere Vertragsbedingungen (BIM-BVB)"
         },
         {
          "type": "image",
          "name": "imagequestion11",
          "imageLink": "/masterproject/backend/uploads/1713257720797-07_BIM-BVB.jpg",
          "imageFit": "cover",
          "imageHeight": "auto",
          "imageWidth": "100%"
         },
         {
          "type": "rating",
          "name": "BIM4VIDQuestion11",
          "title": " ",
          "hideNumber": true,
          "autoGenerate": false,
          "rateCount": 6,
          "rateValues": [
           {
            "value": 1,
            "text": "0"
           },
           {
            "value": 2,
            "text": "1"
           },
           {
            "value": 3,
            "text": "2"
           },
           {
            "value": 4,
            "text": "3"
           },
           {
            "value": 5,
            "text": "4"
           },
           {
            "value": 6,
            "text": "5"
           }
          ],
          "rateMax": 6
         }
        ],
        "title": "Regulierungen und Verträge"
       },
       {
        "type": "panel",
        "name": "BIM4VIDPanel6",
        "elements": [
         {
          "type": "html",
          "name": "explanationquestion12",
          "html": "BIM-Unterstützung der Auftragnehmer"
         },
         {
          "type": "image",
          "name": "imagequestion12",
          "imageLink": "/masterproject/backend/uploads/1713257780776-08_AN-UnterstÃ¼tzung.jpg",
          "imageFit": "cover",
          "imageHeight": "auto",
          "imageWidth": "100%"
         },
         {
          "type": "rating",
          "name": "BIM4VIDQuestion12",
          "title": " ",
          "hideNumber": true,
          "autoGenerate": false,
          "rateCount": 6,
          "rateValues": [
           {
            "value": 1,
            "text": "0"
           },
           {
            "value": 2,
            "text": "1"
           },
           {
            "value": 3,
            "text": "2"
           },
           {
            "value": 4,
            "text": "3"
           },
           {
            "value": 5,
            "text": "4"
           },
           {
            "value": 6,
            "text": "5"
           }
          ],
          "rateMax": 6
         },
         {
          "type": "html",
          "name": "explanationquestion13",
          "html": "Bürgerinformation und -beteiligung"
         },
         {
          "type": "image",
          "name": "imagequestion13",
          "imageLink": "/masterproject/backend/uploads/1713257784640-09_BÃ¼rgerinformation.jpg",
          "imageFit": "cover",
          "imageHeight": "auto",
          "imageWidth": "100%"
         },
         {
          "type": "rating",
          "name": "BIM4VIDQuestion13",
          "title": " ",
          "hideNumber": true,
          "autoGenerate": false,
          "rateCount": 6,
          "rateValues": [
           {
            "value": 1,
            "text": "0"
           },
           {
            "value": 2,
            "text": "1"
           },
           {
            "value": 3,
            "text": "2"
           },
           {
            "value": 4,
            "text": "3"
           },
           {
            "value": 5,
            "text": "4"
           },
           {
            "value": 6,
            "text": "5"
           }
          ],
          "rateMax": 6
         }
        ],
        "title": "Stakeholder"
       },
       {
        "type": "panel",
        "name": "BIM4VIDPanel7",
        "elements": [
         {
          "type": "html",
          "name": "explanationquestion14",
          "html": "Prozesse und Prozessübersichten"
         },
         {
          "type": "image",
          "name": "imagequestion14",
          "imageLink": "/masterproject/backend/uploads/1713258735903-10_Prozesse.jpg",
          "imageFit": "cover",
          "imageHeight": "auto",
          "imageWidth": "100%"
         },
         {
          "type": "rating",
          "name": "BIM4VIDQuestion14",
          "title": " ",
          "hideNumber": true,
          "autoGenerate": false,
          "rateCount": 6,
          "rateValues": [
           {
            "value": 1,
            "text": "0"
           },
           {
            "value": 2,
            "text": "1"
           },
           {
            "value": 3,
            "text": "2"
           },
           {
            "value": 4,
            "text": "3"
           },
           {
            "value": 5,
            "text": "4"
           },
           {
            "value": 6,
            "text": "5"
           }
          ],
          "rateMax": 6
         },
         {
          "type": "html",
          "name": "explanationquestion15",
          "html": "Dokumentation von BIM-Wissen"
         },
         {
          "type": "image",
          "name": "imagequestion15",
          "imageLink": "/masterproject/backend/uploads/1713258740152-11_BIM-Wissen.jpg",
          "imageFit": "cover",
          "imageHeight": "auto",
          "imageWidth": "100%"
         },
         {
          "type": "rating",
          "name": "BIM4VIDQuestion15",
          "title": " ",
          "hideNumber": true,
          "autoGenerate": false,
          "rateCount": 6,
          "rateValues": [
           {
            "value": 1,
            "text": "0"
           },
           {
            "value": 2,
            "text": "1"
           },
           {
            "value": 3,
            "text": "2"
           },
           {
            "value": 4,
            "text": "3"
           },
           {
            "value": 5,
            "text": "4"
           },
           {
            "value": 6,
            "text": "5"
           }
          ],
          "rateMax": 6
         }
        ],
        "title": "Prozesse"
       },
       {
        "type": "panel",
        "name": "BIM4VIDPanel8",
        "elements": [
         {
          "type": "html",
          "name": "explanationquestion16",
          "html": "Software"
         },
         {
          "type": "image",
          "name": "imagequestion16",
          "imageLink": "/masterproject/backend/uploads/1713258907485-12_Software.jpg",
          "imageFit": "cover",
          "imageHeight": "auto",
          "imageWidth": "100%"
         },
         {
          "type": "rating",
          "name": "BIM4VIDQuestion16",
          "title": " ",
          "hideNumber": true,
          "autoGenerate": false,
          "rateCount": 6,
          "rateValues": [
           {
            "value": 1,
            "text": "0"
           },
           {
            "value": 2,
            "text": "1"
           },
           {
            "value": 3,
            "text": "2"
           },
           {
            "value": 4,
            "text": "3"
           },
           {
            "value": 5,
            "text": "4"
           },
           {
            "value": 6,
            "text": "5"
           }
          ],
          "rateMax": 6
         },
         {
          "type": "html",
          "name": "explanationquestion17",
          "html": "Hardware"
         },
         {
          "type": "image",
          "name": "imagequestion17",
          "imageLink": "/masterproject/backend/uploads/1713258910874-13_Hardware.jpg",
          "imageFit": "cover",
          "imageHeight": "auto",
          "imageWidth": "100%"
         },
         {
          "type": "rating",
          "name": "BIM4VIDQuestion17",
          "title": " ",
          "hideNumber": true,
          "autoGenerate": false,
          "rateCount": 6,
          "rateValues": [
           {
            "value": 1,
            "text": "0"
           },
           {
            "value": 2,
            "text": "1"
           },
           {
            "value": 3,
            "text": "2"
           },
           {
            "value": 4,
            "text": "3"
           },
           {
            "value": 5,
            "text": "4"
           },
           {
            "value": 6,
            "text": "5"
           }
          ],
          "rateMax": 6
         }
        ],
        "title": "IT-Infrastruktur"
       },
       {
        "type": "panel",
        "name": "BIM4VIDPanel9",
        "elements": [
         {
          "type": "html",
          "name": "explanationquestion18",
          "html": "CDE nach DIN SPEC 91391-1"
         },
         {
          "type": "image",
          "name": "imagequestion18",
          "imageLink": "/masterproject/backend/uploads/1713259023095-14_CDE.jpg",
          "imageFit": "cover",
          "imageHeight": "auto",
          "imageWidth": "100%"
         },
         {
          "type": "rating",
          "name": "BIM4VIDQuestion18",
          "title": " ",
          "hideNumber": true,
          "autoGenerate": false,
          "rateCount": 6,
          "rateValues": [
           {
            "value": 1,
            "text": "0"
           },
           {
            "value": 2,
            "text": "1"
           },
           {
            "value": 3,
            "text": "2"
           },
           {
            "value": 4,
            "text": "3"
           },
           {
            "value": 5,
            "text": "4"
           },
           {
            "value": 6,
            "text": "5"
           }
          ],
          "rateMax": 6
         },
         {
          "type": "html",
          "name": "explanationquestion19",
          "html": "Interoperabilität im Sinne des EIF und nach BuildingSMART"
         },
         {
          "type": "image",
          "name": "imagequestion19",
          "imageLink": "/masterproject/backend/uploads/1713259026414-15_InteroperabilitÃ¤t.jpg",
          "imageFit": "cover",
          "imageHeight": "auto",
          "imageWidth": "100%"
         },
         {
          "type": "rating",
          "name": "BIM4VIDQuestion19",
          "title": " ",
          "hideNumber": true,
          "autoGenerate": false,
          "rateCount": 6,
          "rateValues": [
           {
            "value": 1,
            "text": "0"
           },
           {
            "value": 2,
            "text": "1"
           },
           {
            "value": 3,
            "text": "2"
           },
           {
            "value": 4,
            "text": "3"
           },
           {
            "value": 5,
            "text": "4"
           },
           {
            "value": 6,
            "text": "5"
           }
          ],
          "rateMax": 6
         }
        ],
        "title": "Technologie und Daten"
       }
      ],
      "title": "Dimensionen und KPI-Abfragen"
     }
    ],
    "showProgressBar": "top",
    "widthMode": "static",
    "width": "80%",
    "fitToContainer": true
   }

export { BIM4VID };
