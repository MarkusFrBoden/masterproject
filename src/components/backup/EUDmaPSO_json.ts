const EUPSOJSON = {
    "locale": "de",
    "title": {
     "de": "Fragebogen zur Bewertung der digitalen Reife für EDIH-Kunden",
     "en": "Digital Maturity Assessment Questionnaire for EDIH Customers"
    },
    "completedHtml": {
     "de": "<h3>Vielen Dank für die Teilnahme an der Umfrage</h3>",
     "en": "<h3>Thank you for taking part in the survey</h3>"
    },
    "pages": [
     {
      "name": "EUPSOPage1",
      "elements": [
       {
        "type": "panel",
        "name": "EUPSOPanel1",
        "elements": [
         {
          "type": "text",
          "name": "EUPSOQuestion1",
          "title": {
           "de": "Datum",
           "en": "Date"
          },
          "defaultValue": " ",
          "isRequired": true,
          "inputType": "date"
         },
         {
          "type": "text",
          "name": "EUPSOQuestion2",
          "title": {
           "de": "Name der vom EDIH unterstützten Einrichtung",
           "en": "Name of the organisation supported by the EDIH"
          },
          "defaultValue": " ",
          "isRequired": true
         },
         {
          "type": "text",
          "name": "EUPSOQuestion3",
          "title": {
           "de": "Sonstige Identifizierungsnummer (Umsatzsteuer o. Ä.)",
           "en": "Other Identification Number (VAT or equivalent)"
          },
          "defaultValue": " ",
          "isRequired": true
         },
         {
          "type": "panel",
          "name": "EUPSOPanel2",
          "elements": [
           {
            "type": "text",
            "name": "EUPSOQuestion4",
            "title": {
             "de": "Name",
             "en": "Name"
            },
            "defaultValue": " ",
            "isRequired": true
           },
           {
            "type": "text",
            "name": "EUPSOQuestion5",
            "title": {
             "de": "Funktion in der Einrichtung",
             "en": "Role in the organisation"
            },
            "defaultValue": " ",
            "isRequired": true
           },
           {
            "type": "text",
            "name": "EUPSOQuestion6",
            "title": {
             "de": "E-Mail-Adresse",
             "en": "Email address"
            },
            "defaultValue": " ",
            "isRequired": true,
            "inputType": "email"
           },
           {
            "type": "text",
            "name": "EUPSOQuestion7",
            "title": {
             "de": "Telefonnummer",
             "en": "Telephone:"
            },
            "defaultValue": " ",
            "isRequired": true,
            "inputType": "tel"
           }
          ],
          "description": "Kontaktperson"
         },
         {
          "type": "text",
          "name": "EUPSOQuestion8",
          "title": {
           "de": "Website",
           "en": "Website"
          },
          "defaultValue": " ",
          "isRequired": true,
          "inputType": "url"
         },
         {
          "type": "radiogroup",
          "name": "EUPSOQuestion9",
          "title": {
           "de": "Art der öffentlichen Einrichtung",
           "en": "Type of public sector organisation"
          },
          "defaultValue": " ",
          "isRequired": true,
          "choices": [
           {
            "value": "Item 1",
            "text": {
             "de": "Nationale Behörde",
             "en": "National authority"
            }
           },
           {
            "value": "Item 2",
            "text": {
             "de": "Regional-/Landesbehörde",
             "en": "Regional authority"
            }
           },
           {
            "value": "Item 3",
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
          "name": "EUPSOQuestion10",
          "title": {
           "de": "Zahl der Beschäftigten der Einrichtung",
           "en": "Organisation’s staff size"
          },
          "defaultValue": " ",
          "isRequired": true,
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
          "name": "EUPSOQuestion11",
          "title": {
           "de": "Vollständige Anschrift",
           "en": "Full address"
          },
          "isRequired": true,
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
          "name": "EUPSOQuestion12",
          "title": {
           "de": "PIC-Nummer",
           "en": "PIC number"
          },
          "description": {
           "de": "Falls vorhanden, wird von EDIH ausgefüllt",
           "en": "If available, to be filled by EDIH"
          },
          "defaultValue": " "
         }
        ],
        "description": {
         "de": "M1.1. Allgemeine Angaben",
         "en": "M1.1. General Data"
        }
       },
       {
        "type": "panel",
        "name": "EUPSOPanel3",
        "elements": [
         {
          "type": "panel",
          "name": "EUPSOPanel4",
          "elements": [
           {
            "type": "radiogroup",
            "name": "EUPSOQuestion13",
            "title": {
             "de": "Primär (eine Option obligatorisch)",
             "en": "Primary (one mandatory)"
            },
            "defaultValue": " ",
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
            "name": "EUPSOQuestion14",
            "title": {
             "de": "Sekundär (eine Option fakultativ)",
             "en": "Secondary (one optional)"
            },
            "defaultValue": " ",
            "isRequired": true,
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
          },
          "isRequired": true
         }
        ],
        "description": {
         "de": "M1.2. Tätigkeitssektor",
         "en": "M1.2. Sector of Activity"
        }
       }
      ],
      "title": {
       "de": "MODUL 1: Kundendaten",
       "en": "MODULE 1: Customer Data"
      },
      "description": {
       "de": "Bitte geben Sie in diesem Modul allgemeine Basisinformationen über die öffentliche Einrichtung an, die an einer EDIH-Unterstützung interessiert ist. Diese Daten werden benötigt, um auszuwerten, wie hoch der Grad der Digitalisierung Ihrer Einrichtung im Vergleich zu ähnlichen Einrichtungen ist.",
       "en": "In this module, please provide basic general information about the public sector organisation that is interested in receiving EDIH support. This data is needed in order to analyse how your organisation’s level of digital maturity compares to that of similar others."
      }
     },
     {
      "name": "EUPSOPage2",
      "elements": [
       {
        "type": "panel",
        "name": "EUPSOPanel5",
        "elements": [
         {
          "type": "image",
          "name": "Digital Maturity Assessment Framework for Public Sector Organisations (PSOs)",
          "imageLink": {
           "de": "https://masterproject-backend.up.railway.app/uploads/1713787799222-EU-DMA-PSO-M2.png",
           "en": "https://masterproject-backend.up.railway.app/uploads/1713787799223-EU-DMA-PSO-M2.png"
          },
          "altText": "Source: EC JRC own elaboration",
          "imageHeight": 330,
          "imageWidth": 800
         }
        ],
        "description": {
         "de": "Die Fragen in diesem Modul zielen darauf ab, die digitale Reife Ihrer Einrichtung zu messen. Die Angaben sollen dabei helfen, einzuordnen, an welchem Punkt des digitalen Wandels Ihre Einrichtung zurzeit steht, und zu ermitteln, in welchen Bereichen sie Unterstützung durch das EDIH benötigen könnte. Sie werden auch zur Bewertung der Dienstleistungen, die das EDIH für Ihre Einrichtung letztlich erbringt, und zur Bewertung der Maßnahmen und Finanzinstrumente der EU zur Unterstützung des EDIH beitragen. Folgende Dimensionen werden bewertet (unter Anwendung der auf der letzten Seite erläuterten Bewertungskriterien)",
         "en": "Questions in this module aim to measure the digital maturity of your organisation. This information will help to characterise the point of departure for the digital transformation journey of your organisation, identifying areas where it might need EDIH support. It will also help to assess the services eventually provided by the EDIH, as well as to help assess the EU policies and financial instruments supporting EDIHs. The following dimensions will be assessed (applying the scoring criteria detailed in the end page)"
        }
       }
      ],
      "title": {
       "de": "MODUL 2: Digitale Reife",
       "en": "MODULE 2: Digital Maturity"
      }
     },
     {
      "name": "EUPSOPage3",
      "elements": [
       {
        "type": "panel",
        "name": "EUPSOPanel6",
        "elements": [
         {
          "type": "checkbox",
          "name": "EUPSOQuestion15",
          "title": {
           "de": "Welche Vorkehrungen wurden getroffen, um Ihre Einrichtung auf die (weitere) Digitalisierung vorzubereiten? Bitte wählen Sie alle zutreffenden Optionen aus",
           "en": "In which of the following ways is your organisation prepared for (more) digitalisation? Please select all options that apply"
          },
          "defaultValue": [
           " "
          ],
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
           },
           {
            "value": "Item 4",
            "text": {
             "de": "IKT-Fachpersonal wurde eingestellt bzw. ein entsprechender Unterauftrag vergeben (oder es wurde ermittelt, wie viele Stellen bzw. Untervergaben erforderlich sind)",
             "en": "ICT specialists are employed/sub-contracted (or hiring/subcontracting needs have been identified)"
            }
           },
           {
            "value": "Item 5",
            "text": {
             "de": "Es gibt ein angemessenes politisches Engagement, um die notwendigen organisatorischen Veränderungen vorzunehmen",
             "en": "There is appropriate level of political commitment to lead the necessary organisational changes needed"
            }
           },
           {
            "value": "Item 6",
            "text": {
             "de": "Die Leitung der Organisationseinheiten/Abteilungen und ihre Beschäftigten sind vorbereitet und bereit, Digitalisierungspläne zu unterstützen",
             "en": "Organisational units'/departments' management and their staff are prepared and ready to support digitalisation plans"
            }
           },
           {
            "value": "Item 7",
            "text": {
             "de": "Interne und externe operative Prozesse können angepasst werden, wenn die Digitalisierung dies erfordert",
             "en": "Internal and external operational processes can be adapted if isRequired by digitalisation"
            }
           },
           {
            "value": "Item 8",
            "text": {
             "de": "Offline-Dienste können online bereitgestellt oder durch digitale Technologien weiter modernisiert werden",
             "en": "Offline services are ready to be brought online or further modernised by digital technologies "
            }
           },
           {
            "value": "Item 9",
            "text": {
             "de": "Die Zufriedenheit der Bürgerinnen und Bürger und anderer Interessengruppen (Unternehmen, NRO usw.) mit Online-Diensten/Interaktionen wird regelmäßig überwacht (z. B. durch Feedback-Formulare, E-Mail-Austausch, soziale Medien usw.)",
             "en": "Citizens' and other stakeholders' (businesses, NGOs etc) satisfaction with online services/interactions is monitored regularly (e.g. via feedback forms, emails exchanges, social media, etc.)"
            }
           },
           {
            "value": "Item 10",
            "text": {
             "de": "Risiken der Digitalisierung (z. B. ungeplante Auswirkungen auf andere Bereiche) werden berücksichtigt",
             "en": "Risks of digitalisation (e.g. non-planned effects over other areas) are considered"
            }
           }
          ]
         },
         {
          "type": "matrixdropdown",
          "name": "EUPSOQuestion16",
          "title": {
           "de": "In welchen der folgenden operativen Bereiche hat Ihre Einrichtung bereits in die Digitalisierung investiert, und in welchen Bereichen plant sie, in Zukunft zu investieren? Bitte wählen Sie alle zutreffenden Optionen aus",
           "en": "In which of the following operational areas has your organisation already invested in digitalisation and in which ones does it plan to invest in the future? Please select all options that apply"
          },
          "defaultValue": " ",
          "columns": [
           {
            "name": "Column 1",
            "title": {
             "de": "(weitere) Investition geplant",
             "en": "(further) Plan to invest"
            }
           },
           {
            "name": "Column 2",
            "title": {
             "de": "Investition getätigt",
             "en": "Already invested"
            }
           }
          ],
          "choices": [
           {
            "value": "Yes",
            "text": {
             "de": "Ja"
            }
           }
          ],
          "cellType": "checkbox",
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
           },
           {
            "value": "Row 3",
            "text": {
             "de": "Politikgestaltung (Zyklus der Politikgestaltung: Festlegung der Agenda, Politikformulierung, Politikverabschiedung, Politikumsetzung, Politikbewertung)",
             "en": "Policy making (Policy making cycle: agenda setting, policy formulation, policy adoption, policy implementation, policy evaluation)"
            }
           },
           {
            "value": "Row 4",
            "text": {
             "de": "Bereitstellung öffentlicher Dienstleistungen (oder Produkte)",
             "en": "Provision of public services (or products)"
            }
           },
           {
            "value": "Row 5",
            "text": {
             "de": "Finanzverwaltung (Buchhaltung, Logistik, elektronische Rechnungen usw.)",
             "en": "Financial administration (accounting, logistics, elnvoices etc.)"
            }
           },
           {
            "value": "Row 6",
            "text": {
             "de": "Personalverwaltung",
             "en": "Human resources management"
            }
           },
           {
            "value": "Row 7",
            "text": {
             "de": "Beschaffung und Vergabe öffentlicher Aufträge",
             "en": "Purchasing and public procurement"
            }
           },
           {
            "value": "Row 8",
            "text": {
             "de": "Projektplanung und management",
             "en": "Project planning and management"
            }
           }
          ]
         }
        ],
        "description": {
         "de": "M2.1. Digitale Strategie und Investitionen",
         "en": "M2.1. Digital Strategy and Investments"
        }
       }
      ]
     },
     {
      "name": "EUPSOPage4",
      "elements": [
       {
        "type": "panel",
        "name": "EUPSOPanel7",
        "elements": [
         {
          "type": "checkbox",
          "name": "EUPSOQuestion17",
          "title": {
           "de": "Welche der folgenden digitalen Technologien und Lösungen werden von Ihrer Einrichtung bereits eingesetzt? Bitte wählen Sie alle zutreffenden Optionen aus",
           "en": "Which of the following digital technologies and solutions are already used by your organisation? Please select all options that apply"
          },
          "defaultValue": [
           " "
          ],
          "choices": [
           {
            "value": "Item 1",
            "text": {
             "de": "Konnektivitätsinfrastruktur (z. B. Hochgeschwindigkeitsinternet (Glasfaser), Cloud-Computing-Dienste, Fernzugriff auf Bürosysteme)",
             "en": "Connectivity infrastructure (e.g. high-speed (fibre) Internet, cloud computing services, remote access to office systems)"
            }
           },
           {
            "value": "Item 2",
            "text": {
             "de": "Website",
             "en": "Website"
            }
           },
           {
            "value": "Item 3",
            "text": {
             "de": "Web-Formulare oder -Foren für die Kommunikation mit den Bürgerinnen und Bürgern",
             "en": "Web-based forms or forums to communicate with citizens"
            }
           },
           {
            "value": "Item 4",
            "text": {
             "de": "Live-Chats, soziale Netzwerke und/oder Chatbots für die Kommunikation mit den Bürgerinnen und Bürgern",
             "en": "Live chats, social networks and/or chatbots to communicate with citizens"
            }
           },
           {
            "value": "Item 5",
            "text": {
             "de": "Instrumente der Fernzusammenarbeit (z. B. Telearbeitsplattform, Videokonferenzen, virtuelles Lernen, dienstleistungsspezifische Plattformen und Instrumente)",
             "en": "Remote collaboration tools (e.g. teleworking platform, videoconferencing, virtual learning, service-specific platforms and tools)"
            }
           },
           {
            "value": "Item 6",
            "text": {
             "de": "Internes Webportal (Intranet)",
             "en": "Internal web portal (Intranet)"
            }
           },
           {
            "value": "Item 7",
            "text": {
             "de": "Informationsverwaltungssysteme (z. B. Software für Ressourcenplanung, Buchhaltung, Personalverwaltung, Kundenbeziehungsmanagement, elektronische Rechnungsstellung)",
             "en": "Information Management Systems (e.g. Enterprise Resources Planning, Accounting, HR Management, Customer Relationship Management, e-invoicing)"
            }
           },
           {
            "value": "Item 8",
            "text": {
             "de": "Instrumente für digitale öffentliche Dienste (Online-Interaktion mit Bürgerinnen und Bürgern und/oder Unternehmen, Online-Dienstleistungserbringung)",
             "en": "Tools for digital public services (online interaction with citizens and/or businesses, online service delivery)"
            }
           },
           {
            "value": "Item 9",
            "text": {
             "de": "Instrumente für die Vergabe öffentlicher Aufträge (elektronische Auftragsvergabe)",
             "en": "Public procurement tools (eProcurement)"
            }
           }
          ]
         },
         {
          "type": "matrixdropdown",
          "name": "EUPSOQuestion18",
          "title": {
           "de": "Welche der folgenden fortgeschrittenen digitalen Technologien werden von Ihrer Einrichtung bereits eingesetzt? Bitte wählen Sie alle zutreffenden Optionen anhand der vorgegebenen Skala aus",
           "en": "Which of the following advanced digital technologies are already used by your organisation? Please choose all options that apply using the provided scale"
          },
          "defaultValue": {
           "Row 1": {
            "Column 1": "Item 1"
           },
           "Row 2": {
            "Column 1": "Item 1"
           },
           "Row 3": {
            "Column 1": "Item 1"
           },
           "Row 4": {
            "Column 1": "Item 1"
           },
           "Row 5": {
            "Column 1": "Item 1"
           },
           "Row 6": {
            "Column 1": "Item 1"
           },
           "Row 7": {
            "Column 1": "Item 1"
           },
           "Row 8": {
            "Column 1": "Item 1"
           }
          },
          "isRequired": true,
          "columns": [
           {
            "name": "Column 1",
            "title": {
             "de": "Skala",
             "en": "Scale"
            }
           }
          ],
          "choices": [
           {
            "value": "Item 1",
            "text": {
             "de": "0-Nicht genutzt",
             "en": "0-Not used"
            }
           },
           {
            "value": "Item 2",
            "text": {
             "de": "1-In Abwägung",
             "en": "1-Consider to use"
            }
           },
           {
            "value": "Item 3",
            "text": {
             "de": "2-Pilotprojekt",
             "en": "2-Prototyping"
            }
           },
           {
            "value": "Item 4",
            "text": {
             "de": "3-Testen",
             "en": "3-Testing"
            }
           },
           {
            "value": "Item 5",
            "text": {
             "de": "4-Implementierung",
             "en": "4-Implementing"
            }
           },
           {
            "value": "Item 6",
            "text": {
             "de": "5-Operativ",
             "en": "5-Operational"
            }
           }
          ],
          "cellType": "radiogroup",
          "rows": [
           {
            "value": "Row 1",
            "text": {
             "de": "Künstliche Intelligenz (z. B. maschinelles Lernen, Deep Learning; Experten- und regelbasierte Systeme; Cognitive Computing, prädiktive Analytik; robotergestützte Prozessautomatisierung; Sprachdatenverarbeitung, Textauswertung, maschinelles Sehen)",
             "en": "Artificial Intelligence (e.g. Machine learning, Deep learning; Expert and Rule based systems; Cognitive computing, predictive analytics; Robotic process automation; Natural Language Processing, Text Mining, Computer Vision)"
            }
           },
           {
            "value": "Row 2",
            "text": {
             "de": "Kommunikationstechnologien (z. B. 5G-Netze und Handgeräte; Software-definierte Netze)",
             "en": "Communication Technologies (e.g. 5G Networks and Handheld Devices; Software Defined Networks)"
            }
           },
           {
            "value": "Row 3",
            "text": {
             "de": "Recheninfrastrukturen (z. B. Hochleistungsrechnen; Cloud-Computing; Edge-Computing)",
             "en": "Computing Infrastructures (e.g. High Performance Computing; Cloud Computing; Edge Computing)"
            }
           },
           {
            "value": "Row 4",
            "text": {
             "de": "Distributed-Ledger-Technologien (z. B. Blockchain; sonstige Distributed-Ledger-Technologien)",
             "en": "Distributed Ledger Technologies (e.g. Blockchain; Other Distributed Ledger Technologies)"
            }
           },
           {
            "value": "Row 5",
            "text": {
             "de": "Digitale Identität und Sicherheit (z. B. Firewall und Protokolle; Antiviren- und Vulnerabilitätsscanner; biometrisches Screening; Cloud-orientierte Cybersicherheit; fortgeschrittene Benutzeranalyse; mobile Identifizierung; Rahmen für digitale Identität)",
             "en": "Digital Identity and Security (e.g. Firewall and Protocols; Antivirus and Vulnerability Scanners; Biometric Screening; Cloud-oriented Cybersecurity; Advanced User Analytics; Mobile ID; Digital Identity Frameworks)"
            }
           },
           {
            "value": "Row 6",
            "text": {
             "de": "Immersive Technologien (z. B. erweiterte Realität; virtuelle Realität)",
             "en": "Immersive technologies (e.g. Augmented Reality; Virtual Reality)"
            }
           },
           {
            "value": "Row 7",
            "text": {
             "de": "Internet der Dinge und intelligente Geräte (z. B. Mobilgeräte, am Körper getragene Geräte (Wearables) und Sensoren; Plattformen für das Internet der Dinge)",
             "en": "Internet of things and Smart Devices (e.g. Mobile Devices, Wearables and Sensors; Internet of Things Platforms)"
            }
           },
           {
            "value": "Row 8",
            "text": {
             "de": "Software und Servicetechnologien (z. B. API, Webdienste, Mikrodienste einschließlich Register und Marktplätze; Enterprise-Service-Bus-Technologien und Dienstprogramme für staatliche Dienstleistungen)",
             "en": "Software and Service Technologies (e.g. APIs, Web Services, Microservices including Registries and Marketplace; Enterprise Service Bus Technologies and Government Service Utilities)"
            }
           }
          ]
         }
        ],
        "description": {
         "de": "M2.2. Bereitschaft für den digitalen Wandel",
         "en": "M2.2. Digital Readiness"
        }
       }
      ]
     },
     {
      "name": "EUPSOPage5",
      "elements": [
       {
        "type": "panel",
        "name": "EUPSOPanel8",
        "elements": [
         {
          "type": "checkbox",
          "name": "EUPSOQuestion19",
          "title": {
           "de": "Was tut Ihre Einrichtung, um ihre Beschäftigten für die Digitalisierung zu qualifizieren und weiterzubilden? Bitte wählen Sie alle zutreffenden Optionen aus",
           "en": "What does your organisation do to re-skill and up-skill its staff for digitalisation? Please select all options that apply"
          },
          "defaultValue": [
           " "
          ],
          "choices": [
           {
            "value": "Item 1",
            "text": {
             "de": "Bewertet die Defizite bei den digitalen Kompetenzen der Beschäftigten",
             "en": "Assesses digital skills gaps of the staff"
            }
           },
           {
            "value": "Item 2",
            "text": {
             "de": "Entwickelt einen Schulungsplan für die Schulung und Weiterbildung der Beschäftigten",
             "en": "Designs a training plan to train and up-skill staff"
            }
           },
           {
            "value": "Item 3",
            "text": {
             "de": "Organisiert Kurzschulungen und stellt Tutorials/Leitlinien und andere E-Learning-Ressourcen bereit",
             "en": "Organises short trainings, provides tutorials/guidelines and other e-learning resources"
            }
           },
           {
            "value": "Item 4",
            "text": {
             "de": "Bietet einfache Möglichkeiten zum praxisorientierten Lernen, Peer-Learning und Experimentieren",
             "en": "Facilitates learning-by-doing/peer learning/experimentation opportunities"
            }
           },
           {
            "value": "Item 5",
            "text": {
             "de": "Bietet Praktika und Stellenvermittlungen in Schlüsselbereichen an",
             "en": "Offers traineeships & job placements in key capacity areas"
            }
           },
           {
            "value": "Item 6",
            "text": {
             "de": "Finanziert die Teilnahme der Beschäftigten an Schulungen externer Organisationen (Schulungsanbieter, Hochschulen, Lieferanten)",
             "en": "Sponsors staff participation in trainings organised by external organisations (training providers, academia, vendors)"
            }
           },
           {
            "value": "Item 7",
            "text": {
             "de": "Nutzt subventionierte Schulungs- und Weiterbildungsprogramme",
             "en": "Makes use of subsidised training and upskilling programmes"
            }
           }
          ]
         },
         {
          "type": "checkbox",
          "name": "EUPSOQuestion20",
          "title": {
           "de": "Wie bindet Ihre Einrichtung bei der Einführung neuer digitaler Lösungen ihre Beschäftigten und Endnutzer (Bürgerinnen und Bürger/Unternehmen im Falle digitaler öffentlicher Dienste) ein und befähigt sie? Bitte wählen Sie alle zutreffenden Optionen aus",
           "en": "When adopting new digital solutions, how does your organisation engage and empower its staff and end-users (citizens/businesses in case of digital public services)? Please select all options that apply"
          },
          "defaultValue": [
           " "
          ],
          "choices": [
           {
            "value": "Item 1",
            "text": {
             "de": "Sensibilisiert das Personal für neue digitale Technologien",
             "en": "Increases staff awareness about new digital technologies"
            }
           },
           {
            "value": "Item 2",
            "text": {
             "de": "Kommuniziert den Beschäftigten Digitalisierungspläne in transparenter und inklusiver Weise",
             "en": "Communicates digitalisation plans to staff in a transparent and inclusive way"
            }
           },
           {
            "value": "Item 3",
            "text": {
             "de": "Überwacht die Akzeptanz durch die Beschäftigten und ergreift Maßnahmen, um potenzielle unerwünschte Nebeneffekte abzumildern (z. B. Angst vor Veränderungen; ständige Erreichbarkeit, die der Vereinbarkeit Schutzmaßnahmen gegen Datenschutzverletzungen usw.)",
             "en": "Involves staff (including non-ICT staff) in the design and development of product/service/process digitalisation"
            }
           },
           {
            "value": "Item 4",
            "text": {
             "de": "Bezieht die Beschäftigten (einschließlich Nicht-IKT-Personal) in die Konzeption und Entwicklung der Digitalisierung von Produkten/Dienstleistungen/Prozessen ein",
             "en": "Monitors staff acceptance and takes measures to mitigate the potential collateral effects (e.g. fear to change; 'always on' culture vs. work-life balance; safeguards to risks of privacy breaches etc.)"
            }
           },
           {
            "value": "Item 5",
            "text": {
             "de": "Gibt den Beschäftigten mehr Autonomie und geeignete digitale Instrumente, um Entscheidungen zu treffen und umzusetzen",
             "en": "Gives staff more autonomy and appropriate digital tools to take and execute decisions"
            }
           },
           {
            "value": "Item 6",
            "text": {
             "de": "Gestaltet Stellen und Arbeitsabläufe auf der Grundlage der Rückmeldungen der Beschäftigten neu bzw. passt sie an",
             "en": "Redesigns/Adapts jobs and workflows based on staff's feedback"
            }
           },
           {
            "value": "Item 7",
            "text": {
             "de": "Führt flexiblere Arbeitsregelungen ein, die durch die Digitalisierung ermöglicht werden (z. B. Telearbeit, Hybridarbeit)",
             "en": "Sets up more flexible working arrangements enabled by digitalisation (e.g. telework, hybrid working)"
            }
           },
           {
            "value": "Item 8",
            "text": {
             "de": "Stellt den Beschäftigten ein Team bzw. einen Dienst (intern/extern) zur digitalen Unterstützung zur Verfügung",
             "en": "Puts at staffs disposal a digital support team/service (internal/external)"
            }
           },
           {
            "value": "Item 9",
            "text": {
             "de": "Stellt den Endnutzern ein Team bzw. einen Dienst (intern/extern) zur digitalen Unterstützung zur Verfügung",
             "en": "Puts at end-users disposal a digital support team/service (internal/external)"
            }
           },
           {
            "value": "Item 10",
            "text": {
             "de": "Nutzt Rückmeldungen von Endnutzern (Bürgerinnen und Bürgern/Unternehmen) zur Verbesserung digitaler öffentlicher Dienste",
             "en": "Uses feedback from end-users (citizens/businesses) to improve digital public services"
            }
           }
          ]
         }
        ],
        "description": {
         "de": "M2.3. Auf den Menschen ausgerichtete Digitalisierung",
         "en": "M2.3. Human-centric digitalisation"
        }
       }
      ]
     },
     {
      "name": "EUPSOPage6",
      "elements": [
       {
        "type": "panel",
        "name": "EUPSOPanel9",
        "elements": [
         {
          "type": "checkbox",
          "name": "EUPSOQuestion21",
          "title": {
           "de": "Wie werden die Daten Ihrer Einrichtung verwaltet (hinsichtlich Speicherung, Organisation, Zugriff und Nutzung)? Bitte wählen Sie alle zutreffenden Optionen aus",
           "en": "How are your organisation’s data managed (i.e. stored, organised, accessed and exploited)? Please select all options that apply"
          },
          "defaultValue": [
           " "
          ],
          "choices": [
           {
            "value": "Item 1",
            "text": {
             "de": "Die Einrichtung verfügt über eine Datenverwaltungsstrategie/einen Datenverwaltungsplan/einen Maßnahmenkatalog",
             "en": "The organisation has in place a data management policy/plan/set of measures"
            }
           },
           {
            "value": "Item 2",
            "text": {
             "de": "Die Einrichtung verwendet keine Papierformulare zur Erhebung von Daten",
             "en": "The organisation does not use paper-based forms to collect data"
            }
           },
           {
            "value": "Item 3",
            "text": {
             "de": "Daten werden in der Einrichtung nur digital gespeichert (z. B. in Büroanwendungen, E-Mail-Ordnern, eigenständigen Anwendungen, Datenbanken, Dokumentenverwaltungssystemen, ERP usw.)",
             "en": "Data are stored only digitally in the organisation (e.g., in office applications, email folders, stand-alone applications, databases, document management systems, ERP etc.)"
            }
           },
           {
            "value": "Item 4",
            "text": {
             "de": "Daten werden fachgerecht integriert (z. B. durch interoperable Systeme, Anwendungsprogrammierschnittstellen), auch wenn sie auf verschiedene Systeme verteilt sind",
             "en": "Data are properly integrated (e.g. through interoperable systems, Application Programming Interfaces) even when they are distributed amongst different systems"
            }
           },
           {
            "value": "Item 5",
            "text": {
             "de": "Daten sind von verschiedenen Geräten und Standorten aus in Echtzeit zugänglich",
             "en": "Data are accessible in real-time from different devices and locations"
            }
           },
           {
            "value": "Item 6",
            "text": {
             "de": "Erfasste Daten werden systematisch analysiert und für die Entscheidungsfindung aufbereitet",
             "en": "Collected data are systematically analysed and reported for decision-making"
            }
           },
           {
            "value": "Item 7",
            "text": {
             "de": "Daten der Einrichtung werden durch Daten Dritter (d. h. Daten anderer öffentlicher Einrichtungen und/oder von Akteuren des Privatsektors) ergänzt",
             "en": "Organisation's data are enriched with third-party data (i.e. data from other public sector organisations and/or private sector actors)"
            }
           },
           {
            "value": "Item 8",
            "text": {
             "de": "Datenanalysen der Einrichtung sind ohne Hilfe von Experten zugänglich (z. B. über Dashboards)",
             "en": "Organisation's data analytics are accessible without the need of expert assistance on a regular base (e.g. through dashboards)"
            }
           },
           {
            "value": "Item 9",
            "text": {
             "de": "Daten der Einrichtung sind über einen Strategieplan für offene Daten öffentlich zugänglich",
             "en": "Organisation's data are available publicly via an Open Data policy plan"
            }
           }
          ]
         },
         {
          "type": "checkbox",
          "name": "EUPSOQuestion22",
          "title": {
           "de": "Sind die Daten Ihrer Einrichtung ausreichend gesichert? Bitte wählen Sie alle zutreffenden Optionen aus",
           "en": "Are your organisations’ data sufficiently secured? Please select all options that apply"
          },
          "defaultValue": [
           " "
          ],
          "choices": [
           {
            "value": "Item 1",
            "text": {
             "de": "In unserer Einrichtung gibt es eine Strategie/einen Maßnahmenkatalog für die Datensicherheit",
             "en": "A data security policy/set of measures is in place in our organisation"
            }
           },
           {
            "value": "Item 2",
            "text": {
             "de": "Es gibt Pläne und Maßnahmen zum Schutz der Daten der Einrichtung vor Cyberangriffen",
             "en": "There are established plans and measures to safeguard organisation's data from cyberattacks"
            }
           },
           {
            "value": "Item 3",
            "text": {
             "de": "Die Beschäftigten werden regelmäßig zu Cybersicherheits- und Datenschutzthemen informiert und geschult",
             "en": "Staff is regularly informed and trained on cybersecurity and data protection issues/risks"
            }
           },
           {
            "value": "Item 4",
            "text": {
             "de": "Sicherheitsbedrohungen werden regelmäßig überwacht und bewertet",
             "en": "Cyber-threats are regularly monitored and assessed"
            }
           },
           {
            "value": "Item 5",
            "text": {
             "de": "Eine vollständige Sicherungskopie kritischer Daten wird gepflegt (an einem externen Standort/in der Cloud)",
             "en": "A full backup copy of critical data is maintained (off-site/in the cloud)"
            }
           },
           {
            "value": "Item 6",
            "text": {
             "de": "Es gibt einen Plan zur Aufrechterhaltung des Geschäftsbetriebs bei unvorhergesehenen Totalausfällen (z. B. bei einer Sperrung aller Daten durch einen Ransomware-Angriff oder physischen Schäden an der IT-Infrastruktur)",
             "en": "A business continuity plan is in place in case of catastrophic failures (e.g. all data locked by a ransomware attack or physical damage to the IT infrastructure)"
            }
           }
          ]
         }
        ],
        "description": {
         "de": "M2.4. Datenverwaltung und -sicherheit",
         "en": "M2.4. Data Management and Security"
        }
       }
      ]
     },
     {
      "name": "EUPSOPage7",
      "elements": [
       {
        "type": "panel",
        "name": "EUPSOPanel10",
        "elements": [
         {
          "type": "matrixdropdown",
          "name": "EUPSOQuestion23",
          "title": {
           "de": "Was unternimmt Ihre Organisation bei der Digitalisierung von Prozessen und Dienstleistungen, um Daten, Informationen und Wissen mit anderen öffentlichen Einrichtungen auszutauschen? Bitte wählen Sie alle Optionen, die für Ihre Einrichtung gelten, anhand der angegebenen Skala aus",
           "en": "While digitalising processes and services, what does your organization do to share data, information and knowledge with other public sector organizations? Please select all options that apply to your organisation using the provided scale"
          },
          "defaultValue": " ",
          "columns": [
           {
            "name": "Column 1",
            "title": {
             "de": "(weiteres) Geplant",
             "en": "(further) Planned"
            }
           },
           {
            "name": "Column 2",
            "title": {
             "de": "Umgesetzt",
             "en": "Implemented"
            }
           }
          ],
          "choices": [
           {
            "value": "Yes",
            "text": {
             "de": "Ja"
            }
           }
          ],
          "cellType": "checkbox",
          "rows": [
           {
            "value": "Row 1",
            "text": {
             "de": "Veröffentlichung von Daten als offene Daten",
             "en": "Publish data as Open Data"
            }
           },
           {
            "value": "Row 2",
            "text": {
             "de": "Sicherstellung gleicher Wettbewerbsbedingungen für quelloffene Software",
             "en": "Ensure a level playing field for open source software"
            }
           },
           {
            "value": "Row 3",
            "text": {
             "de": "Bevorzugung von offenen Spezifikationen",
             "en": "Give preference to open specifications"
            }
           },
           {
            "value": "Row 4",
            "text": {
             "de": "Sicherstellung der internen Sichtbarkeit und Bereitstellung externer Schnittstellen für erbrachte Dienstleistungen",
             "en": "Ensure internal visibility and provide external interfaces for provided services"
            }
           },
           {
            "value": "Row 5",
            "text": {
             "de": "Wiederverwendung und gemeinsame Nutzung von Lösungen, Informationen und Daten",
             "en": "Reuse and share solutions, information and data"
            }
           },
           {
            "value": "Row 6",
            "text": {
             "de": "Endnutzern keine technologiespezifischen Lösungen auferlegen",
             "en": "Do not impose any technology-specific solutions on end-user"
            }
           },
           {
            "value": "Row 7",
            "text": {
             "de": "Sicherstellung der Datenübertragbarkeit",
             "en": "Ensure data portability"
            }
           },
           {
            "value": "Row 8",
            "text": {
             "de": "Endnutzern Optionen für den Zugang zu Dienstleistungen bieten, die ihren Bedürfnissen am besten entsprechen",
             "en": "Give end-users options to access services that best suits their needs"
            }
           },
           {
            "value": "Row 9",
            "text": {
             "de": "Einrichtung einer zentralen Anlaufstelle für Zugang zu Dienstleistungen",
             "en": "Provide a single point of contact to access services"
            }
           },
           {
            "value": "Row 10",
            "text": {
             "de": "Nutzer nur einmalig und nur nach relevanten Informationen fragen",
             "en": "Ask users once-only and relevant-only information"
            }
           },
           {
            "value": "Row 11",
            "text": {
             "de": "Menschen mit Behinderungen, ältere Menschen und andere benachteiligte Gruppen haben Zugang zu Dienstleistungen",
             "en": "Persons with disabilities, the elderly and other disadvantaged groups can access services"
            }
           },
           {
            "value": "Row 12",
            "text": {
             "de": "Dienstleistungen sind in mehr als einer Sprache verfügbar",
             "en": "Services are available in more than one language"
            }
           },
           {
            "value": "Row 13",
            "text": {
             "de": "Sicherstellung eines sicheren und vertrauenswürdigen Datenaustauschs mit den Endnutzern",
             "en": "Ensure that data exchange with end-users is secure and trustworthy"
            }
           },
           {
            "value": "Row 14",
            "text": {
             "de": "Priorisierung der Nutzung von Dienstleistungen über digitale Kanäle",
             "en": "Give priority to using services via digital channels"
            }
           },
           {
            "value": "Row 15",
            "text": {
             "de": "Datenspeicherformate gewährleisten langfristige Zugänglichkeit",
             "en": "Data storage formats ensure long-term accessibility"
            }
           },
           {
            "value": "Row 16",
            "text": {
             "de": "Bewertung digitaler Lösungen unter Berücksichtigung des Nutzerbedarfs und des Gleichgewichts zwischen Kosten und Nutzen",
             "en": "Digital solutions are evaluated considering user needs and balancing between costs and benefit"
            }
           }
          ]
         }
        ],
        "description": {
         "de": "M2.5. Interoperabilität",
         "en": "M2.5. Interoperability"
        }
       }
      ]
     },
     {
      "name": "EUPSOPage8",
      "elements": [
       {
        "type": "panel",
        "name": "EUPSOPanel11",
        "elements": [
         {
          "type": "checkbox",
          "name": "EUPSOQuestion24",
          "title": {
           "de": "Wie nutzt Ihre Einrichtung digitale Technologien, um zur ökologischen Nachhaltigkeit beizutragen? Bitte wählen Sie alle zutreffenden Optionen aus",
           "en": "How does your organisation make use of digital technologies to contribute to environmental sustainability? Please select all options that apply"
          },
          "defaultValue": [
           " "
          ],
          "choices": [
           {
            "value": "Item 1",
            "text": {
             "de": "Nachhaltiges Organisationsmodell (z. B. umweltbewusster Betrieb)",
             "en": "Sustainable organisational model (e.g. environmental conscious operations)"
            }
           },
           {
            "value": "Item 2",
            "text": {
             "de": "Nachhaltige Erbringung von Dienstleistungen (z. B. papierlose digitale öffentliche Dienste)",
             "en": "Sustainable service provision (e.g. paperless digital public services)"
            }
           },
           {
            "value": "Item 3",
            "text": {
             "de": "Beschaffung nachhaltiger Produkte (z. B. Berücksichtigung von Kriterien wie ökologische Konzeption, durchgängige Produktlebenszyklusplanung, Lebensdauer und Verlängerung der Nutzungsdauer)",
             "en": "Procurement of sustainable products (e.g. considering criteria such as: eco-design, end-to-end product lifecycle planning, end-of-life & extension of useful life)"
            }
           },
           {
            "value": "Item 4",
            "text": {
             "de": "Berücksichtigung von Emissionen, Umweltverschmutzung und/oder Abfallwirtschaft",
             "en": "Considering emissions, pollution and/or waste management"
            }
           },
           {
            "value": "Item 5",
            "text": {
             "de": "Nachhaltige Energieerzeugung in eigener Anlage",
             "en": "Sustainable energy generation in own facility"
            }
           },
           {
            "value": "Item 6",
            "text": {
             "de": "Optimierung des Energieverbrauchs/der Energiekosten",
             "en": "Optimisation of energy consumption/cost"
            }
           },
           {
            "value": "Item 7",
            "text": {
             "de": "Senkung der Transport- und Verpackungskosten",
             "en": "Reduction of transport costs"
            }
           },
           {
            "value": "Item 8",
            "text": {
             "de": "Digitale Anwendungen zur Förderung eines verantwortungsvollen Verhaltens der Bürgerinnen und Bürger",
             "en": "Digital applications to encourage responsible citizens behaviour"
            }
           },
           {
            "value": "Item 9",
            "text": {
             "de": "Papierlose Verwaltungsverfahren",
             "en": "Paperless administrative processes"
            }
           }
          ]
         },
         {
          "type": "matrix",
          "name": "EUPSOQuestion25",
          "title": {
           "de": "Berücksichtigt Ihre Einrichtung bei ihren Digitalisierungsentscheidungen und digitalen Abläufen auch die Auswirkungen auf die Umwelt? Bitte bewerten Sie alle zutreffenden Optionen",
           "en": "Is your organisation taking into account environmental impacts in its digital choices and practices? Please grade all options that apply using this scale"
          },
          "defaultValue": {
           "Row 1": "Column 1",
           "Row 2": "Column 1",
           "Row 3": "Column 1",
           "Row 4": "Column 1",
           "Row 5": "Column 1"
          },
          "isRequired": true,
          "columns": [
           {
            "value": "Column 1",
            "text": {
             "de": "Nein",
             "en": "No"
            }
           },
           {
            "value": "Column 2",
            "text": {
             "de": "Teilweise",
             "en": "Partially"
            }
           },
           {
            "value": "Column 3",
            "text": {
             "de": "Ja",
             "en": "Yes"
            }
           }
          ],
          "rows": [
           {
            "value": "Row 1",
            "text": {
             "de": "Umweltbelange und standards sind in die Digitalstrategie der Einrichtung eingebettet",
             "en": "Environmental concerns and standards are embedded in the organisation's digital strategy"
            }
           },
           {
            "value": "Row 2",
            "text": {
             "de": "Es gibt ein implementiertes Umweltmanagementsystem/eine implementierte Umweltzertifizierung",
             "en": "An Environmental Management System/certification is implemented"
            }
           },
           {
            "value": "Row 3",
            "text": {
             "de": "Umweltaspekte sind Bestandteil digitaler Technologien/Kriterien bei der Beschaffung",
             "en": "Environmental aspects are part of digital technologies/suppliers' procurement criteria"
            }
           },
           {
            "value": "Row 4",
            "text": {
             "de": "Der Energieverbrauch digitaler Technologien und der Datenspeicherung wird überwacht und optimiert",
             "en": "Energy consumption of digital technologies and data storage are monitored and optimised"
            }
           },
           {
            "value": "Row 5",
            "text": {
             "de": "Recycling/Wiederverwendung von alter technischer Ausrüstung wird von der Einrichtung aktiv betrieben",
             "en": "Recycling/re-use of old technological equipment is actively practised by the organisation"
            }
           }
          ]
         }
        ],
        "description": {
         "de": "M2.6. Grüne Digitalisierung",
         "en": "M2.6. Green digitalisation"
        }
       }
      ]
     }
    ],
    "showQuestionNumbers": "off",
    "showProgressBar": "top",
    "questionTitlePattern": "numTitle",
    "widthMode": "static",
    "width": "900",
    "fitToContainer": true
   };

export { EUPSOJSON };
