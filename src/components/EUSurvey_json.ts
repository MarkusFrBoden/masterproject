import imagede from "../assets/EUSurvey-Module_German.png"
import imageen from "../assets/EUSurvey-Modules_English.png";
import type {Survey} from "../interfaces/surveyInterface.js"

const EUSurveyJSON: Survey = {
    "title": {
        "de": "Fragebogen zur Bewertung der digitalen Reife für EDIH-Kunden",
        "en": "Digital Maturity Assessment Questionnaire for EDIH Customers"
    },
    "description": {
        "de": "Zielgruppe: öffentliche Einrichtungen Phase: T0 (vor dem Start der EDIH-Unterstützung)",
        "en": "Target group: Public Sector Organisations Stage: T0 (prior to EDIH support start)"
    },
    "completedHtml": {
        "de": "<h3>Danke für das ausfüllen</h3>",
        "en": "<h3>Thank you for completing the survey</h3>"
    },
    "showQuestionNumbers": "off",
    "showProgressBar": "top",
    "showPreviewBeforeComplete": "showAllQuestions",
    "widthMode": "static",
    "width": "900",
    "fitToContainer": true,
    "pages": [
        {
            "name": "page1",
            "title": {
                "de": "MODUL 1: Kundendaten",
                "en": "MODULE 1: Customer Data"
            },
            "description": {
                "de": "Bitte geben Sie in diesem Modul allgemeine Basisinformationen über die öffentliche Einrichtung an, die an einer EDIH-Unterstützung interessiert ist. Diese Daten werden benötigt, um auszuwerten, wie hoch der Grad der Digitalisierung Ihrer Einrichtung im Vergleich zu ähnlichen Einrichtungen ist.",
                "en": "In this module, please provide basic general information about the public sector organisation that is interested in receiving EDIH support. This data is needed in order to analyse how your organisation’s level of digital maturity compares to that of similar others."
            },
            "html": true,
            "elements": [
                {
                    "type": "panel",
                    "name": "panelx",
                    "description": {
                        "de": "M1.1. Allgemeine Angaben",
                        "en": "M1.1. General Data"
                    },
                    "elements": [
                        {
                            "type": "text",
                            "name": "question1",
                            "title": {
                                "de": "Datum",
                                "en": "Date"
                            },
                            "isRequired": false,
                            "inputType": "date"
                        },
                        {
                            "type": "text",
                            "name": "question2",
                            "title": {
                                "de": "Name der vom EDIH unterstützten Einrichtung",
                                "en": "Name of the organisation supported by the EDIH"
                            },
                            "isRequired": false
                        },
                        {
                            "type": "text",
                            "name": "question3",
                            "title": {
                                "de": "Sonstige Identifizierungsnummer (Umsatzsteuer o. Ä.)",
                                "en": "Other Identification Number (VAT or equivalent)"
                            },
                            "isRequired": false
                        },
                        {
                            "type": "text",
                            "name": "question4",
                            "title": {
                                "de": "Kontaktperson",
                                "en": "Contact person"
                            },
                            "isRequired": false
                        },
                        {
                            "type": "text",
                            "name": "question5",
                            "title": {
                                "de": "Funktion in der Einrichtung",
                                "en": "Role in the organisation"
                            },
                            "isRequired": false
                        },
                        {
                            "type": "text",
                            "name": "question6",
                            "title": {
                                "de": "E-Mail-Adresse",
                                "en": "Email address"
                            },
                            "isRequired": false,
                            "inputType": "email"
                        },
                        {
                            "type": "text",
                            "name": "question7",
                            "title": {
                                "de": "Telefonnummer",
                                "en": "Telephone:"
                            },
                            "isRequired": false,
                            "inputType": "tel"
                        },
                        {
                            "type": "text",
                            "name": "question8",
                            "title": {
                                "de": "Website",
                                "en": "Website"
                            },
                            "isRequired": false,
                            "inputType": "url"
                        },
                        {
                            "type": "radiogroup",
                            "name": "question9",
                            "title": {
                                "de": "Art der öffentlichen Einrichtung",
                                "en": "Type of public sector organisation"
                            },
                            "isRequired": false,
                            "choices": [
                                {
                                    "value": "nationalAuthority",
                                    "text": {
                                        "de": "Nationale Behörde",
                                        "en": "National authority"
                                    }
                                },
                                {
                                    "value": "regionalAuthority",
                                    "text": {
                                        "de": "Regional-/Landesbehörde",
                                        "en": "Regional authority"
                                    }
                                },
                                {
                                    "value": "provinceMunicipalAuthority",
                                    "text": {
                                        "de": "Provinz-/Gemeindebehörde",
                                        "en": "Province/municipal authority"
                                    }
                                },
                                {
                                    "value": "other",
                                    "text": {
                                        "de": "Andere",
                                        "en": "Other"
                                    }
                                }
                            ]
                        },
                        {
                            "type": "radiogroup",
                            "name": "question12",
                            "title": {
                                "de": "Zahl der Beschäftigten der Einrichtung",
                                "en": "Organisation’s staff size"
                            },
                            "isRequired": false,
                            "choices": [
                                {
                                    "value": "Item 1",
                                    "text": {
                                        "de": "Kleine Belegschaft (0–49)",
                                        "en": "Small-size (0-49)"
                                    }
                                },
                                {
                                    "value": "Item 2",
                                    "text": {
                                        "de": "Mittlere Belegschaft (50–249)",
                                        "en": "Medium-size (50-249)"
                                    }
                                },
                                {
                                    "value": "Item 3",
                                    "text": {
                                        "de": "Große Belegschaft (250 oder mehr)",
                                        "en": "Large-size (250 or more)"
                                    }
                                }
                            ]
                        },
                        {
                            "type": "multipletext",
                            "name": "question13",
                            "title": {
                                "de": "Vollständige Anschrift",
                                "en": "Full address"
                            },
                            "isRequired": false,
                            "items": [
                                {
                                    "name": "text1",
                                    "title": {
                                        "de": "Straße",
                                        "en": "Street"
                                    }
                                },
                                {
                                    "name": "text2",
                                    "title": {
                                        "de": "Postleitzahl",
                                        "en": "Postal code"
                                    }
                                },
                                {
                                    "name": "text3",
                                    "title": {
                                        "de": "Stadt",
                                        "en": "City"
                                    }
                                },
                                {
                                    "name": "text4",
                                    "title": {
                                        "de": "Land",
                                        "en": "Country"
                                    }
                                }
                            ]
                        },
                        {
                            "type": "text",
                            "name": "question14",
                            "title": {
                                "de": "PIC-Nummer",
                                "en": "PIC number"
                            },
                            "description": {
                                "de": "Falls vorhanden, wird von EDIH ausgefüllt",
                                "en": "If available, to be filled by EDIH"
                            }
                        }
                    ]
                },

                {
                    "type": "panel",
                    "name": "panely",
                    "description": {
                        "de": "M1.2. Tätigkeitssektor",
                        "en": "M1.2. Sector of Activity"
                    },
                    "elements": [{
                        "type": "panel",
                        "name": "question10",
                        "elements": [
                            {
                                "type": "radiogroup",
                                "name": "question1",
                                "title": {
                                    "de": "Primär (eine Option obligatorisch)",
                                    "en": "Primary (one mandatory)"
                                },
                                "isRequired": false,
                                "choices": [
                                    {
                                        "value": "Item 1",
                                        "text": {
                                            "de": "Dienstleistungen der allgemeinen öffentlichen Verwaltung",
                                            "en": "General public services"
                                        }
                                    },
                                    {
                                        "value": "Item 2",
                                        "text": {
                                            "de": "Verteidigung",
                                            "en": "Defence"
                                        }
                                    },
                                    {
                                        "value": "Item 3",
                                        "text": {
                                            "de": "Öffentliche Ordnung und Sicherheit",
                                            "en": "Public order and safety"
                                        }
                                    },
                                    {
                                        "value": "Item 4",
                                        "text": {
                                            "de": "Wirtschaftliche Angelegenheiten",
                                            "en": "Economic affairs"
                                        }
                                    },
                                    {
                                        "value": "Item 5",
                                        "text": {
                                            "de": "Umweltschutz",
                                            "en": "Environmental protection"
                                        }
                                    },
                                    {
                                        "value": "Item 6",
                                        "text": {
                                            "de": "Wohnungswesen",
                                            "en": "Housing and community amenities"
                                        }
                                    },
                                    {
                                        "value": "Item 7",
                                        "text": {
                                            "de": "Gesundheit",
                                            "en": "Health"
                                        }
                                    },
                                    {
                                        "value": "Item 8",
                                        "text": {
                                            "de": "Freizeitgestaltung, Sport, Kultur und Religion",
                                            "en": "Recreation, culture and religion"
                                        }
                                    },
                                    {
                                        "value": "Item 9",
                                        "text": {
                                            "de": "Bildungswesen",
                                            "en": "Education"
                                        }
                                    },
                                    {
                                        "value": "Item 10",
                                        "text": {
                                            "de": "Sozialschutz",
                                            "en": "Social protection"
                                        }
                                    }
                                ],
                                "showOtherItem": true
                            },
                            {
                                "type": "radiogroup",
                                "name": "question15",
                                "title": {
                                    "de": "Sekundär (eine Option fakultativ)",
                                    "en": "Secondary (one optional)"
                                },
                                "choices": [
                                    {
                                        "value": "Item 1",
                                        "text": {
                                            "de": "Dienstleistungen der allgemeinen öffentlichen Verwaltung",
                                            "en": "General public services"
                                        }
                                    },
                                    {
                                        "value": "Item 2",
                                        "text": {
                                            "de": "Verteidigung",
                                            "en": "Defence"
                                        }
                                    },
                                    {
                                        "value": "Item 3",
                                        "text": {
                                            "de": "Öffentliche Ordnung und Sicherheit",
                                            "en": "Public order and safety"
                                        }
                                    },
                                    {
                                        "value": "Item 4",
                                        "text": {
                                            "de": "Wirtschaftliche Angelegenheiten",
                                            "en": "Economic affairs"
                                        }
                                    },
                                    {
                                        "value": "Item 5",
                                        "text": {
                                            "de": "Umweltschutz",
                                            "en": "Environmental protection"
                                        }
                                    },
                                    {
                                        "value": "Item 6",
                                        "text": {
                                            "de": "Wohnungswesen und kommunale Einrichtungen",
                                            "en": "Housing and community amenities"
                                        }
                                    },
                                    {
                                        "value": "Item 7",
                                        "text": {
                                            "de": "Gesundheit",
                                            "en": "Health"
                                        }
                                    },
                                    {
                                        "value": "Item 8",
                                        "text": {
                                            "de": "Freizeitgestaltung, Sport, Kultur und Religion",
                                            "en": "Recreation, culture and religion"
                                        }
                                    },
                                    {
                                        "value": "Item 9",
                                        "text": {
                                            "de": "Bildungswesen",
                                            "en": "Education"
                                        }
                                    },
                                    {
                                        "value": "Item 10",
                                        "text": {
                                            "de": "Sozialschutz",
                                            "en": "Social protection"
                                        }
                                    }
                                ],
                                "showOtherItem": true
                            }
                        ],
                        "title": {
                            "de": "Zu welchem der folgenden großen Regierungsbereiche gehört Ihre Einrichtung? Bitte wählen Sie bis zu zwei Optionen aus",
                            "en": "In which of the following government broad areas does your organisation belong2? Please select up to two options"
                        }
                    }]
                }
            ]
        },
        {
            "name": "page2",
            "title": {
                "de": "MODUL 2: Digitale Reife",
                "en": "MODULE 2: Digital Maturity"
            },
            "elements": [
                {
                    "type": "panel",
                    "name": "panel1",
                    "elements": [
                        {
                            "type": "image",
                            "name": "Digital Maturity Assessment Framework for Public Sector Organisations (PSOs)",
                            "imageLink": {
                                "de": imagede,
                                "en": imageen
                            },
                            "imageHeight": 330,
                            "imageWidth": 800,
                            "altText": "Source: EC JRC own elaboration"
                        }
                    ],
                    "description": {
                        "de": "Die Fragen in diesem Modul zielen darauf ab, die digitale Reife Ihrer Einrichtung zu messen. Die Angaben sollen dabei helfen, einzuordnen, an welchem Punkt des digitalen Wandels Ihre Einrichtung zurzeit steht, und zu ermitteln, in welchen Bereichen sie Unterstützung durch das EDIH benötigen könnte. Sie werden auch zur Bewertung der Dienstleistungen, die das EDIH für Ihre Einrichtung letztlich erbringt, und zur Bewertung der Maßnahmen und Finanzinstrumente der EU zur Unterstützung des EDIH beitragen. Folgende Dimensionen werden bewertet (unter Anwendung der auf der letzten Seite erläuterten Bewertungskriterien)",
                        "en": "Questions in this module aim to measure the digital maturity of your organisation. This information will help to characterise the point of departure for the digital transformation journey of your organisation, identifying areas where it might need EDIH support. It will also help to assess the services eventually provided by the EDIH, as well as to help assess the EU policies and financial instruments supporting EDIHs. The following dimensions will be assessed (applying the scoring criteria detailed in the end page)"
                    }
                }
            ]
        },
        {
            "name": "page3",
            "title": {
                "de": "",
                "en": ""
            },
            "elements": [
                {
                    "type": "checkbox",
                    "name": "question17",
                    "title": {
                        "de": "Welche Vorkehrungen wurden getroffen, um Ihre Einrichtung auf die (weitere) Digitalisierung vorzubereiten? Bitte wählen Sie alle zutreffenden Optionen aus",
                        "en": "In which of the following ways is your organisation prepared for (more) digitalisation? Please select all options that apply"
                    },
                    "choices": [
                        {
                            "value": "Item 1",
                            "text": {
                                "de": "Der Digitalisierungsbedarf wurde ermittelt und ist auf die politischen/administrativen Zielen abgestimmt",
                                "en": "Digitalisation needs are identified and are aligned with policy making/administrative objectives"
                            }
                        },
                        {
                            "value": "Item 2",
                            "text": {
                                "de": "Die finanziellen Ressourcen (Eigenmittel, Zuschüsse, Darlehen), mit denen die Digitalisierungsprojekte mindestens in den folgenden zwei Jahren abgesichert sind, wurden ermittelt",
                                "en": "Financial resources (own funds, grants, loans) are identified to secure digitalisation projects during at least the following two years"
                            }
                        },
                        {
                            "value": "Item 3",
                            "text": {
                                "de": "Die IKT-Infrastrukturen sind für eine Unterstützung der Digitalisierungspläne bereit",
                                "en": "ICT infrastructures are ready to support digitalisation plans"
                            }
                        }
                    ]
                },
                {
                    "type": "matrix",
                    "name": "question16",
                    "title": {
                        "de": "In welchen der folgenden operativen Bereiche hat Ihre Einrichtung bereits in die Digitalisierung investiert, und in welchen Bereichen plant sie, in Zukunft zu investieren? Bitte wählen Sie alle zutreffenden Optionen aus.",
                        "en": "In which of the following operational areas has your organisation already invested in digitalisation and in which ones does it plan to invest in the future? Please select all options that apply."
                    },
                    "columns": [
                        {
                            "value": "Column 1",
                            "text": {
                                "de": "Investition getätigt",
                                "en": "Already invested"
                            }
                        },
                        {
                            "value": "Column 2",
                            "text": {
                                "de": "Investition geplant",
                                "en": "Plan to invest"
                            }
                        },
                        {
                            "value": "Column 3",
                            "text": {
                                "de": "nichts derbeiden",
                                "en": "nothing"
                            }
                        }
                    ],
                    "rows": [
                        {
                            "value": "Row 1",
                            "text": {
                                "de": "Interne Abläufe (administrative, strukturelle, organisatorische Prozesse)",
                                "en": "Internal operations (administrative, structural, organisational processes)"
                            }
                        },
                        {
                            "value": "Row 2",
                            "text": {
                                "de": "Externe Maßnahmen (Governance-Prozesse einschließlich neuer Formen der Beteiligung von Bürgerinnen und Bürgern)",
                                "en": "External operations (governance processes including new ways of citizen participation)"
                            }
                        }
                    ]
                }
            ]

        }
    ]
};

export { EUSurveyJSON };
