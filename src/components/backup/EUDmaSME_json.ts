const EUSMEJSON = {
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
      "name": "EUSMEPage1",
      "elements": [
       {
        "type": "panel",
        "name": "EUSMEPanel1",
        "elements": [
         {
          "type": "text",
          "name": "EUSMEQuestion1",
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
          "name": "EUSMEQuestion2",
          "title": {
           "de": "Name der vom EDIH unterstützten Einrichtung",
           "en": "Name of the organisation supported by the EDIH"
          },
          "defaultValue": " ",
          "isRequired": true
         },
         {
            "type": "panel",
            "name": "panel1",
            "description": {
                "de": "Allgemeine Angaben",
                "en": "General Data"
            },
            "elements": [
                {
                    "type": "text",
                    "name": "EUSMEQuestion3",
                    "title": {
                        "de": "Sonstige Identifizierungsnummer (Umsatzsteuer o. Ä.)",
                        "en": "Other Identification Number (VAT or equivalent)"
                    },
                    "defaultValue": ""
                },
                {
                    "type": "panel",
                    "name": "panel1",
                    "description":"Kontaktperson",
                    "elements": [
                        {
                            "type": "text",
                            "name": "EUSMEQuestion4",
                            "title": {
                                "de": "Name",
                                "en": "Name"
                            },
                            "defaultValue": ""
                        },
                        {
                            "type": "text",
                            "name": "EUSMEQuestion5",
                            "title": {
                                "de": "Funktion in der Einrichtung",
                                "en": "Role in the organisation"
                            },
                            "defaultValue": ""
                        },
                        {
                            "type": "text",
                            "name": "EUSMEQuestion6",
                            "title": {
                                "de": "E-Mail-Adresse",
                                "en": "Email address"
                            },
                            "inputType": "email",
                            "defaultValue": ""
                        },
                        {
                            "type": "text",
                            "name": "EUSMEQuestion7",
                            "title": {
                                "de": "Telefonnummer",
                                "en": "Telephone:"
                            },
                            "inputType": "tel",
                            "defaultValue": ""
                        },
                    ]
                },
                {
                    "type": "text",
                    "name": "EUSMEQuestion8",
                    "title": {
                        "de": "Website",
                        "en": "Website"
                    },
                    "inputType": "url",
                    "defaultValue": ""
                },
                {
                    "type": "text",
                    "name": "EUSMEQuestion9",
                    "title": {
                        "de": "Jahr der Unternehmensgründung",
                        "en": "Enterprise’s foundation year"
                    },
                    "defaultValue": ""
                },
                {
                    "type": "radiogroup",
                    "name": "EUSMEQuestion10",
                    "title": {
                        "de": "Zahl der Beschäftigten der Einrichtung",
                        "en": "Organisation’s staff size"
                    },
                    "choices": [
                                                        {
                            "value": "Item 1",
                            "text": {
                                "de": "Kleinstunternehmen (1-9)",
                                "en": "Micro-size (1-9)"
                            }
                        },
                        {
                            "value": "Item 2",
                            "text": {
                                "de": "Kleines Unternehmen (10–49)",
                                "en": "Small-size (10-49)"
                            }
                        },
                        {
                            "value": "Item 3",
                            "text": {
                                "de": "Mittleres Unternehmen (50–249)",
                                "en": "Medium-size (50-249)"
                            }
                        },
                        {
                            "value": "Item 4",
                            "text": {
                                "de": "Großunternehmen (250 oder mehr)",
                                "en": "Large-size (250 or more)"
                            }
                        }
                    ],
                    "defaultValue": ""
                },
                {
                    "type": "multipletext",
                    "name": "EUSMEQuestion11",
                    "title": {
                        "de": "Vollständige Anschrift",
                        "en": "Full address"
                    },
                    "defaultValue": {},
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
                }
            ]
        },
        {
            "type": "panel",
            "name": "panel2",
            "description": {
                "de": "Tätigkeitssektor",
                "en": "Sector of Activity"
            },
            "elements": [
                {
                    "type": "panel",
                    "name": "panel3",
                    "title": {
                        "de": "Zu welchem der folgenden großen Regierungsbereiche gehört Ihre Einrichtung? Bitte wählen Sie bis zu zwei Optionen aus",
                        "en": "In which of the following government broad areas does your organisation belong2? Please select up to two options"
                    },
                    "elements": [
                        {
                            "type": "dropdown",
                            "name": "EUSMEQuestion13",
                            "title": {
                                "de": "Primär (eine Option obligatorisch)",
                                "en": "Primary (one mandatory)"
                            },
                            "choices": [
                                {
                                    "value": "Item 1",
                                    "text": {
                                        "de": "Luft- und Raumfahrt",
                                        "en": "Aeronautics & Space"
                                    }
                                },
                                {
                                    "value": "Item 2",
                                    "text": {
                                        "de": "Landwirtschaft und Ernährung",
                                        "en": "Agriculture and food"
                                    }
                                },
                                {
                                    "value": "Item 3",
                                    "text": {
                                        "de": "Erbringung von öffentlichen und persönlichen Dienstleistungen",
                                        "en": "Community, social and personal service activities"
                                    }
                                },
                                {
                                    "value": "Item 4",
                                    "text": {
                                        "de": "Baugewerbe",
                                        "en": "Construction"
                                    }
                                },
                                {
                                    "value": "Item 5",
                                    "text": {
                                        "de": "Gebrauchsgüter",
                                        "en": "Consumer goods/products"
                                    }
                                },
                                {
                                    "value": "Item 6",
                                    "text": {
                                        "de": "Kultur- und Kreativwirtschaft",
                                        "en": "Culture and Creative industries"
                                    }
                                },
                                {
                                    "value": "Item 7",
                                    "text": {
                                        "de": "Verteidigung und Sicherheit",
                                        "en": "Defence and security"
                                    }
                                },
                                {
                                    "value": "Item 8",
                                    "text": {
                                        "de": "Erziehung und Unterricht",
                                        "en": "Education"
                                    }
                                },
                                {
                                    "value": "Item 9",
                                    "text": {
                                        "de": "Energie und öffentliche Versorgung",
                                        "en": "Energy and utilities"
                                    }
                                },
                                {
                                    "value": "Item 10",
                                    "text": {
                                        "de": "Umwelt",
                                        "en": "Environment"
                                    }
                                },
                                {
                                    "value": "Item 11",
                                    "text": {
                                        "de": "Finanzdienstleistungen",
                                        "en": "Financial services"
                                    }
                                },
                                {
                                    "value": "Item 12",
                                    "text": {
                                        "de": "Biowissenschaften und Gesundheitsversorgung",
                                        "en": "Life sciences & healthcare"
                                    }
                                },
                                {
                                    "value": "Item 13",
                                    "text": {
                                        "de": "Herstellung von Waren",
                                        "en": "Manufacturing"
                                    }
                                },
                                {
                                    "value": "Item 14",
                                    "text": {
                                        "de": "Meeres- und Fischereiwirtschaft",
                                        "en": "Maritime and fishery"
                                    }
                                },
                                {
                                    "value": "Item 15",
                                    "text": {
                                        "de": "Bergbau und Gewinnung von Steinen und Erden",
                                        "en": "Mining and quarrying"
                                    }
                                },
                                {
                                    "value": "Item 16",
                                    "text": {
                                        "de": "Mobilität (einschließlich Kraftfahrzeuge)",
                                        "en": "Mobility (incl. Automotive)"
                                    }
                                },
                                {
                                    "value": "Item 17",
                                    "text": {
                                        "de": "Öffentliche Verwaltung",
                                        "en": "Public administration"
                                    }
                                },
                                {
                                    "value": "Item 18",
                                    "text": {
                                        "de": "Grundstücks- und Wohnungswesen, Vermietung beweglicher Sachen, Erbringung von unternehmensbezogenen Dienstleistungen",
                                        "en": "Real estate, renting and business activities"
                                    }
                                },
                                {
                                    "value": "Item 19",
                                    "text": {
                                        "de": "Erbringung von freiberuflichen, wissenschaftlichen und technischen Dienstleistungen",
                                        "en": "Professional, Scientific and Technical Activities"
                                    }
                                },
                                {
                                    "value": "Item 20",
                                    "text": {
                                        "de": "Telekommunikation, Information und Kommunikation",
                                        "en": "Telecommunications, Information and Communication"
                                    }
                                },
                                {
                                    "value": "Item 21",
                                    "text": {
                                        "de": "Tourismus (einschließlich Restaurants und Beherbergung)",
                                        "en": "Tourism (incl. restaurants and hospitality)"
                                    }
                                },
                                {
                                    "value": "Item 22",
                                    "text": {
                                        "de": "Groß- und Einzelhandel",
                                        "en": "Wholesale and retail"
                                    }
                                },
                                {
                                    "value": "Item 23",
                                    "text": {
                                        "de": "Legale Aspekte",
                                        "en": "Legal Aspects"
                                    }
                                },
                                {
                                    "value": "Item 24",
                                    "text": {
                                        "de": "Verordnung",
                                        "en": "Regulation"
                                    }
                                }
                            ],
                            "showOtherItem": true,
                            "defaultValue": ""
                        },
                        {
                            "type": "dropdown",
                            "name": "EUSMEQuestion14",
                            "title": {
                                "de": "Sekundär (eine Option fakultativ)",
                                "en": "Secondary (one optional)"
                            },
                            "choices": [
                                {
                                    "value": "Item 1",
                                    "text": {
                                        "de": "Luft- und Raumfahrt",
                                        "en": "Aeronautics & Space"
                                    }
                                },
                                {
                                    "value": "Item 2",
                                    "text": {
                                        "de": "Landwirtschaft und Ernährung",
                                        "en": "Agriculture and food"
                                    }
                                },
                                {
                                    "value": "Item 3",
                                    "text": {
                                        "de": "Erbringung von öffentlichen und persönlichen Dienstleistungen",
                                        "en": "Community, social and personal service activities"
                                    }
                                },
                                {
                                    "value": "Item 4",
                                    "text": {
                                        "de": "Baugewerbe",
                                        "en": "Construction"
                                    }
                                },
                                {
                                    "value": "Item 5",
                                    "text": {
                                        "de": "Gebrauchsgüter",
                                        "en": "Consumer goods/products"
                                    }
                                },
                                {
                                    "value": "Item 6",
                                    "text": {
                                        "de": "Kultur- und Kreativwirtschaft",
                                        "en": "Culture and Creative industries"
                                    }
                                },
                                {
                                    "value": "Item 7",
                                    "text": {
                                        "de": "Verteidigung und Sicherheit",
                                        "en": "Defence and security"
                                    }
                                },
                                {
                                    "value": "Item 8",
                                    "text": {
                                        "de": "Erziehung und Unterricht",
                                        "en": "Education"
                                    }
                                },
                                {
                                    "value": "Item 9",
                                    "text": {
                                        "de": "Energie und öffentliche Versorgung",
                                        "en": "Energy and utilities"
                                    }
                                },
                                {
                                    "value": "Item 10",
                                    "text": {
                                        "de": "Umwelt",
                                        "en": "Environment"
                                    }
                                },
                                {
                                    "value": "Item 11",
                                    "text": {
                                        "de": "Finanzdienstleistungen",
                                        "en": "Financial services"
                                    }
                                },
                                {
                                    "value": "Item 12",
                                    "text": {
                                        "de": "Biowissenschaften und Gesundheitsversorgung",
                                        "en": "SLife sciences & healthcare"
                                    }
                                },
                                {
                                    "value": "Item 13",
                                    "text": {
                                        "de": "Herstellung von Waren",
                                        "en": "Manufacturing"
                                    }
                                },
                                {
                                    "value": "Item 14",
                                    "text": {
                                        "de": "Meeres- und Fischereiwirtschaft",
                                        "en": "Maritime and fishery"
                                    }
                                },
                                {
                                    "value": "Item 15",
                                    "text": {
                                        "de": "Bergbau und Gewinnung von Steinen und Erden",
                                        "en": "Mining and quarrying"
                                    }
                                },
                                {
                                    "value": "Item 16",
                                    "text": {
                                        "de": "Mobilität (einschließlich Kraftfahrzeuge)",
                                        "en": "Mobility (incl. Automotive)"
                                    }
                                },
                                {
                                    "value": "Item 17",
                                    "text": {
                                        "de": "Öffentliche Verwaltung",
                                        "en": "Public administration"
                                    }
                                },
                                {
                                    "value": "Item 18",
                                    "text": {
                                        "de": "Grundstücks- und Wohnungswesen, Vermietung beweglicher Sachen, Erbringung von unternehmensbezogenen Dienstleistungen",
                                        "en": "Real estate, renting and business activities"
                                    }
                                },
                                {
                                    "value": "Item 19",
                                    "text": {
                                        "de": "Erbringung von freiberuflichen, wissenschaftlichen und technischen Dienstleistungen",
                                        "en": "Professional, Scientific and Technical Activities"
                                    }
                                },
                                {
                                    "value": "Item 20",
                                    "text": {
                                        "de": "Telekommunikation, Information und Kommunikation",
                                        "en": "Telecommunications, Information and Communication"
                                    }
                                },
                                {
                                    "value": "Item 21",
                                    "text": {
                                        "de": "Tourismus (einschließlich Restaurants und Beherbergung)",
                                        "en": "Tourism (incl. restaurants and hospitality)"
                                    }
                                },
                                {
                                    "value": "Item 22",
                                    "text": {
                                        "de": "Groß- und Einzelhandel",
                                        "en": "Wholesale and retail"
                                    }
                                },
                                {
                                    "value": "Item 23",
                                    "text": {
                                        "de": "Legale Aspekte",
                                        "en": "Legal Aspects"
                                    }
                                },
                                {
                                    "value": "Item 24",
                                    "text": {
                                        "de": "Verordnung",
                                        "en": "Regulation"
                                    }
                                }
                            ],
                            "showOtherItem": true,
                            "defaultValue": ""
                        }
                    ]
                }
            ]
        }
        ],
        "description": {
         "de": "M1.2. Tätigkeitssektor",
         "en": "M1.2. Sector of Activity"
        }
       }
      ],
      "title": {
       "de": "MODUL 2: Grad der Digitalisierung",
       "en": "MODULE 2: Digital Maturity"
      },
      "description": {
       "de": "Die Fragen in diesem Modul zielen darauf ab, den Digitalisierungsgrad Ihres Unternehmens zu messen. Die Angaben sollen dabei helfen, einzuordnen, an welchem Punkt des digitalen Wandels Ihr Unternehmen zurzeit steht, und zu ermitteln, in welchen Bereichen es Unterstützung durch das EDIH benötigen könnte. Sie werden auch dazu beitragen, die Dienstleistungen, die das EDIH für Ihr Unternehmen später erbringt, zu bewerten, und die Maßnahmen und Finanzinstrumente der EU zur Unterstützung des EDIH zu optimieren. ",
       "en": "Questions in this module aim to measure the digital maturity of your enterprise. This information will help to characterise the departing point of the digital transformation journey of your enterprise, identifying areas where it might need EDIH support. It will also help to assess the services eventually provided by the EDIH to your enterprise as well as to fine tune the EU policies and financial instruments supporting EDIHs."
      }
     },
     {
      "name": "EUSMEPage2",
      "elements": [
       {
        "type": "panel",
        "name": "EUSMEPanel5",
        "elements": [
         {
          "type": "image",
          "name": "Digital Maturity Assessment Framework for Small- and Middlesized Enterprises (SME)",
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
      "name": "EUSMEPage3",
      "elements": [
       {
        "type": "panel",
        "name": "EUSMEPanel6",
        "elements": [
         {
          "type": "matrixdropdown",
          "name": "EUSMEQuestion15",
          "title": {
           "de": "In welchen der folgenden Geschäftsbereiche hat Ihr Unternehmen bereits in die Digitalisierung investiert und in welchen plant es (weiterhin) dies für die Zukunft? Bitte wählen Sie alle zutreffenden Optionen aus",
           "en": "In which of the following business areas has your enterprise already invested in digitalisation and in which ones does it plan to (further) invest in the future?  Please select all options that appl"
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
             "de": "Konzeption von Produkten/Dienstleistungen (einschließlich Forschung, Entwicklung und Innovation)",
             "en": "Product/Service design (incl. research, development and innovation)"
            }
           },
           {
            "value": "Row 2",
            "text": {
             "de": "Projektplanung und management",
             "en": "Project planning and management"
            }
           },
           {
            "value": "Row 3",
            "text": {
             "de": "Arbeiten (Herstellung physischer Waren/Fertigung, Verpackung, Wartung, Dienstleistungen usw.)",
             "en": "Operations (production of physical goods/manufacturing, packaging, maintenance, services, etc.)"
            }
           },
           {
            "value": "Row 4",
            "text": {
             "de": "Zusammenarbeit mit anderen internen Standorten oder anderen Unternehmen in der Wertschöpfungskette",
             "en": "Collaboration with other internal site locations or other companies in the value chain"
            }
           },
           {
            "value": "Row 5",
            "text": {
             "de": "Zusammenarbeit mit anderen internen Standorten oder anderen Unternehmen in der Wertschöpfungskette",
             "en": "Collaboration with other internal site locations or other companies in the value chain"
            }
           },
           {
            "value": "Row 6",
            "text": {
             "de": "Marketing, Vertrieb und Kundendienst (Kundenmanagement, Auftragsabwicklung, Helpdesk usw.)",
             "en": "Marketing, sales & customer services (customer management, order processing, helpdesk, etc.)"
            }
           },
           {
            "value": "Row 7",
            "text": {
             "de": "Lieferung (Vertriebslogistik, elektronische Rechnungen usw.)",
             "en": "Delivery (outbound logistics, eInvoices, etc.)"
            }
           },
           {
            "value": "Row 8",
            "text": {
             "de": "Verwaltung und Personalwesen",
             "en": "Administration and human resources"
            }
           },
           {
            "value": "Row 9",
            "text": {
             "de": "Einkauf und Beschaffung",
             "en": "Purchasing and procurement"
            }
           },
           {
            "value": "Row 10",
            "text": {
             "de": "(Cyber-)Sicherheit und Einhaltung der Datenschutzvorschriften/DSGVO",
             "en": "(Cyber)security and compliance with Personal Data regulations/GDPR"
            }
           }
          ]
         },
         {
            "type": "checkbox",
            "name": "EUSMEQuestion16",
            "title": {
             "de": "Welche Vorkehrungen wurden getroffen, um Ihr Unternehmen auf die (weitere) Digitalisierung vorzubereiten? Bitte wählen Sie alle zutreffenden Optionen aus",
             "en": "In which of the following ways is your enterprise prepared for (more) digitalisation? Please select all options that apply"
            },
            "defaultValue": [
             " "
            ],
            "choices": [
             {
              "value": "Item 1",
              "text": {
               "de": "Der Digitalisierungsbedarf ist ermittelt und auf die Unternehmensziele abgestimmt",
               "en": "Digitalisation needs are identified and are aligned with business objectives"
              }
             },
             {
              "value": "Item 2",
              "text": {
               "de": "Die finanziellen Ressourcen (Eigenkapital, Darlehen, Subventionen), mit denen die Digitalisierung mindestens für ein Jahr abgesichert werden kann, sind ermittelt ",
               "en": "Financial resources (own, loans, subsidies) are identified to secure digitalisation during at least one year"
              }
             },
             {
              "value": "Item 3",
              "text": {
               "de": "Die IT-Infrastrukturen zur Unterstützung der Digitalisierungspläne sind bereit",
               "en": "IT infrastructures are ready to support digitalisation plans"
              }
             },
             {
              "value": "Item 4",
              "text": {
               "de": "IKT-Fachpersonal wurde eingestellt bzw. ein entsprechender Unterauftrag vergeben (oder es wurde ermittelt, wie viele Stellen bzw. Untervergaben erforderlich sind)",
               "en": "ICT specialists are employed/sub-contracted (or hiring/subcontracting needs have been identified) "
              }
             },
             {
              "value": "Item 5",
              "text": {
               "de": "Die Unternehmensleitung ist bereit, die notwendigen organisatorischen Änderungen vorzunehmen",
               "en": "Enterprise’s management is ready to lead the necessary organisational changes"
              }
             },
             {
              "value": "Item 6",
              "text": {
               "de": "Die betroffenen Unternehmensabteilungen und deren Personal sind bereit, die Digitalisierungspläne zu unterstützen",
               "en": "Concerned business departments and their staff are ready to support digitalisation plans"
              }
             },
             {
              "value": "Item 7",
              "text": {
               "de": "Die Geschäftsarchitektur und die operativen Prozesse können angepasst werden, wenn die Digitalisierung dies erfordert",
               "en": "Business architecture and operational processes can be adapted if required by digitalisation"
              }
             },
             {
              "value": "Item 8",
              "text": {
               "de": "Hergestellte Produkte werden bereits als Dienstleistung vermarktet (sogenannte Servitization) oder durch Dienstleistungen ergänzt, die mithilfe digitaler Technologien ermöglicht werden. ",
               "en": "Manufactured products are already commercialised as a service (so-called Servitisation) or supplemented by services enabled by digital technologies"
              }
             },
             {
              "value": "Item 9",
              "text": {
               "de": "Die Zufriedenheit der Kunden und Partner mit den Online-Diensten/Interaktionen wird regelmäßig überwacht (über soziale Medien, Aktivitäten des elektronischen Handels, E-Mail Austausch usw.) ",
               "en": "Clients’ and partners’ satisfaction with online services/interactions is monitored regularly (on social media channels, e-commerce operations, emails exchanges, etc.) "
              }
             },
             {
              "value": "Item 10",
              "text": {
               "de": "Die Risiken einer Digitalisierung (z. B. nicht geplante Auswirkungen auf andere Geschäftsbereiche) werden bedacht ",
               "en": "Risks of digitalisation (e.g. non-planned effects over other business areas) are considered"
              }
             }
            ]
           }
        ],
        "description": {
         "de": "M2.1. Digitalisierungsstrategie des Unternehmens",
         "en": "M2.1. Digital Business Strategy"
        }
       }
      ]
     },
     {
      "name": "EUSMEPage4",
      "elements": [
       {
        "type": "panel",
        "name": "EUSMEPanel7",
        "elements": [
         {
          "type": "checkbox",
          "name": "EUSMEQuestion17",
          "title": {
           "de": "Welche der folgenden digitalen Technologien und Lösungen werden von Ihrem Unternehmen bereits eingesetzt? Bitte wählen Sie alle zutreffenden Optionen aus",
           "en": "Which of the following digital technologies and solutions are already used by your enterprise? Please select all options that apply"
          },
          "defaultValue": [
           " "
          ],
          "choices": [
           {
            "value": "Item 1",
            "text": {
             "de": "Konnektivitätsinfrastruktur (Hochgeschwindigkeitsinternet (Glasfaser), Cloud-Computing Dienste, Fernzugriff auf Bürosysteme) ",
             "en": "Connectivity infrastructure (high speed (fibre) internet, cloud computing services, remote access to office systems)"
            }
           },
           {
            "value": "Item 2",
            "text": {
             "de": "Unternehmenswebsite",
             "en": "Enterprise’s website"
            }
           },
           {
            "value": "Item 3",
            "text": {
             "de": "Webbasierte Formulare und Blogs/Foren für die Kommunikation mit Kunden",
             "en": "Web-based forms and blogs/forums to communicate with clients"
            }
           },
           {
            "value": "Item 4",
            "text": {
             "de": "Live-Chats, soziale Netzwerke und Chatbots für die Kommunikation mit Kunden",
             "en": "Live chats, social networks and chatbots to communicate with clients"
            }
           },
           {
            "value": "Item 5",
            "text": {
             "de": "Verkäufe im elektronischen Handel (Business-to-Consumer, Business-to-Business)",
             "en": "E-Commerce sales (Business-to-Consumer, Business-to-Business)"
            }
           },
           {
            "value": "Item 6",
            "text": {
             "de": "Förderung des elektronischen Marketings (Online-Werbung, soziale Medien für Unternehmen usw.)",
             "en": "E-Marketing promotion (online ads, social media for business, etc.)"
            }
           },
           {
            "value": "Item 7",
            "text": {
             "de": "Elektronische Behördendienste (Online-Interaktion mit Behörden, öffentliches Beschaffungswesen)",
             "en": "E-Government (online interaction with public authorities, including public procurement)"
            }
           },
           {
            "value": "Item 8",
            "text": {
             "de": "Instrumente der geschäftlichen Fernzusammenarbeit (z. B. Telearbeitsplattform, Videokonferenzen, virtuelles Lernen, geschäftsspezifisch)",
             "en": "Remote business collaboration tools (e.g. teleworking platform, videoconferencing, virtual learning, business-specific)"
            }
           },
           {
            "value": "Item 9",
            "text": {
             "de": "Internes Webportal (Intranet)",
             "en": "Internal web portal (Intranet)"
            }
           },
           {
            "value": "Item 10",
            "text": {
             "de": "Informationsverwaltungssysteme (Software für Ressourcenplanung, Produktlebenszyklusmanagement, Kundenbeziehungsmanagement, Lieferkettenmanagement, elektronische Rechnungsstellung)",
             "en": "Information Management Systems (Enterprise Resources Planning, Product Lifecycle Management, Customer Relationship Management, Supply Chain Management, e-invoicing)"
            }
           }
          ]
         },
         {
          "type": "matrixdropdown",
          "name": "EUSMEQuestion18",
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
             "de": "0 = wird nicht eingesetzt",
             "en": "0 = Not used"
            }
           },
           {
            "value": "Item 2",
            "text": {
             "de": "1 = Einsatz wird erwogen",
             "en": "1 = Consider to use"
            }
           },
           {
            "value": "Item 3",
            "text": {
             "de": "2 = Prototyp wird eingesetzt",
             "en": "2 = Prototyping"
            }
           },
           {
            "value": "Item 4",
            "text": {
             "de": "3 = wird getestet",
             "en": "3 = Testing"
            }
           },
           {
            "value": "Item 5",
            "text": {
             "de": "4 = wird implementiert",
             "en": "4 = Implementing"
            }
           },
           {
            "value": "Item 6",
            "text": {
             "de": "5 = in Betrieb",
             "en": "5 = Operational"
            }
           }
          ],
          "cellType": "radiogroup",
          "rows": [
           {
            "value": "Row 1",
            "text": {
             "de": "Simulation und digitale Zwillinge (d. h. digitale Echtzeitdarstellungen physischer Objekte/Prozesse)",
             "en": "Simulation & digital twins (i.e. real-time digital representations of physical objects/processes)"
            }
           },
           {
            "value": "Row 2",
            "text": {
             "de": "Virtuelle Realität, erweiterte Realität",
             "en": "Virtual reality, augmented reality"
            }
           },
           {
            "value": "Row 3",
            "text": {
             "de": "Computergestützter Entwurf (CAD) & computergestützte Fertigung (CAM)",
             "en": "Computer-aided design (CAD) & manufacturing (CAM)"
            }
           },
           {
            "value": "Row 4",
            "text": {
             "de": "Produktionsausführungssysteme",
             "en": "Manufacturing execution systems"
            }
           },
           {
            "value": "Row 5",
            "text": {
             "de": "Internet der Dinge (IoT) und Industrielles Internet der Dinge (I-IoT)",
             "en": "Internet of Things (IoT) and Industrial Internet of Things (I-IoT)"
            }
           },
           {
            "value": "Row 6",
            "text": {
             "de": "Blockchain-Technologie",
             "en": "Blockchain technology"
            }
           },
           {
            "value": "Row 7",
            "text": {
             "de": "Additive Fertigung (z. B. 3-D-Drucker)",
             "en": "Additive manufacturing (e.g. 3D printers)"
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
      "name": "EUSMEPage5",
      "elements": [
       {
        "type": "panel",
        "name": "EUSMEPanel8",
        "elements": [
         {
          "type": "checkbox",
          "name": "EUSMEQuestion19",
          "title": {
           "de": "Was tut Ihr Unternehmen, um seine Mitarbeitenden für die Digitalisierung zu qualifizieren und weiterzubilden? Bitte wählen Sie alle zutreffenden Optionen aus",
           "en": "What does your enterprise do to re-skill and up-skill its staff for digitalisation? Please select all options that apply"
          },
          "defaultValue": [
           " "
          ],
          "choices": [
           {
            "value": "Item 1",
            "text": {
             "de": "Bewertet die Kompetenzen der Mitarbeitenden, um die Qualifikationsdefizite zu ermitteln",
             "en": "Performs staff skill assessment to identify the skills gaps"
            }
           },
           {
            "value": "Item 2",
            "text": {
             "de": "Erarbeitet einen Schulungsplan zur Schulung und Weiterbildung des Personals",
             "en": "Designs a training plan to train and up-skill staff"
            }
           },
           {
            "value": "Item 3",
            "text": {
             "de": "Organisiert Kurzschulungen und stellt Tutorials/Leitlinien und andere E-Learning Ressourcen bereit",
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
          "name": "EUSMEQuestion20",
          "title": {
           "de": "Wie kann Ihr Unternehmen bei Einführung neuer digitaler Lösungen seine Mitarbeitenden einbinden und befähigen? Bitte wählen Sie alle zutreffenden Optionen aus",
           "en": "When adopting new digital solutions, how does your enterprise engage and empower its staff? Please select all options that apply"
          },
          "defaultValue": [
           " "
          ],
          "choices": [
           {
            "value": "Item 1",
            "text": {
             "de": "Sensibilisiert die Mitarbeitenden für neue digitale Technologien",
             "en": "Facilitates staff awareness about new digital technologies"
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
             "en": "Monitors staff acceptance and takes measures to mitigate the potential collateral effects (e.g. fear to change; ‘always on’ culture vs. work-life balance; safeguards to risks of privacy breaches etc.)"
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
      "name": "EUSMEPage6",
      "elements": [
       {
        "type": "panel",
        "name": "EUSMEPanel9",
        "elements": [
         {
          "type": "checkbox",
          "name": "EUSMEQuestion21",
          "title": {
           "de": "Wie werden Ihre Unternehmensdaten verwaltet (hinsichtlich Speicherung, Organisation, Zugriff und Nutzung)? Bitte wählen Sie alle zutreffenden Optionen aus",
           "en": "How is your enterprise data managed (i.e. stored, organised, accessed and exploited)?  Please select all options that apply"
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
             "de": "Daten werden nicht digital erfasst",
             "en": "Data is not collected digitally"
            }
           },
           {
            "value": "Item 3",
            "text": {
             "de": "Relevante Daten werden digital gespeichert (z. B. Büroanwendungen, E-Mail-Ordner, eigenständige Anwendungen, CRM- oder ERP-System usw.)",
             "en": "Relevant data is stored digitally (e.g., office applications, email folders, stand-alone applications, CRM or ERP system, etc.)"
            }
           },
           {
            "value": "Item 4",
            "text": {
             "de": "Daten werden fachgerecht integriert (z. B. durch interoperable Systeme, Anwendungsprogrammierschnittstellen), auch wenn sie auf verschiedene Systeme verteilt sind",
             "en": "Data is properly integrated (e.g. through interoperable systems, application programming interfaces) even when it is distributed amongst different systems"
            }
           },
           {
            "value": "Item 5",
            "text": {
             "de": "Daten sind von verschiedenen Geräten und Standorten aus in Echtzeit zugänglich",
             "en": "Data is accessible in real-time from different devices and locations"
            }
           },
           {
            "value": "Item 6",
            "text": {
             "de": "Die erfassten Daten werden systematisch analysiert und für die Entscheidungsfindung aufbereitet",
             "en": "Collected data is systematically analysed and reported for decision-making"
            }
           },
           {
            "value": "Item 7",
            "text": {
             "de": "Datenanalysen werden durch Kombination externer Quellen mit eigenen Daten angereichert",
             "en": "Data analytics are enriched by combining external sources with own data"
            }
           },
           {
            "value": "Item 8",
            "text": {
             "de": "Datenanalysen sind ohne Hilfe von Experten zugänglich (z. B. über Dashboards)",
             "en": "Data analytics are accessible without need of expert assistance  (e.g. through dashboards)"
            }
           }
          ]
         },
         {
          "type": "checkbox",
          "name": "EUSMEQuestion22",
          "title": {
           "de": "Sind Ihre Unternehmensdaten ausreichend gesichert? Bitte wählen Sie alle zutreffenden Optionen aus",
           "en": "Is your enterprise’s data sufficiently secured? Please select all options that apply"
          },
          "defaultValue": [
           " "
          ],
          "choices": [
           {
            "value": "Item 1",
            "text": {
             "de": "Es gibt eine Unternehmensrichtlinie/einen Maßnahmenkatalog für die Datensicherheit",
             "en": "An enterprise data security policy/set of measures is in place"
            }
           },
           {
            "value": "Item 2",
            "text": {
             "de": "All client-related data is protected from cyberattacks",
             "en": "Alle kundenbezogenen Daten sind vor Cyberangriffen geschützt"
            }
           },
           {
            "value": "Item 3",
            "text": {
             "de": "Das Personal wird regelmäßig zu Cybersicherheits- und Datenschutzthemen informiert und geschult",
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
         "de": "M2.4. Datenverwaltung und -vernetztheit",
         "en": "M2.4. Data Management and Connectedness"
        }
       }
      ]
     },
     {
      "name": "EUSMEPage7",
      "elements": [
       {
        "type": "panel",
        "name": "EUSMEPanel10",
        "elements": [
            {
                "type": "matrixdropdown",
                "name": "EUSMEQuestion23",
                "title": {
                 "de": "Welche der folgenden Technologien und Geschäftsanwendungen nutzt Ihr Unternehmen bereits? Bitte bewerten Sie alle zutreffenden Optionen anhand einer Skala von 0 bis 5",
                 "en": "Which of the following technologies and business applications are your enterprise already using?  Please grade all options that apply using a 0-5 scale"
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
                   "de": "0 = wird nicht eingesetzt",
                   "en": "0 = Not used"
                  }
                 },
                 {
                  "value": "Item 2",
                  "text": {
                   "de": "1 = Einsatz wird erwogen",
                   "en": "1 = Consider to use"
                  }
                 },
                 {
                  "value": "Item 3",
                  "text": {
                   "de": "2 = Prototyp wird eingesetzt",
                   "en": "2 = Prototyping"
                  }
                 },
                 {
                  "value": "Item 4",
                  "text": {
                   "de": "3 = wird getestet",
                   "en": "3 = Testing"
                  }
                 },
                 {
                  "value": "Item 5",
                  "text": {
                   "de": "4 = wird implementiert",
                   "en": "4 = Implementing"
                  }
                 },
                 {
                  "value": "Item 6",
                  "text": {
                   "de": "5 = in Betrieb",
                   "en": "5 = Operational"
                  }
                 }
                ],
                "cellType": "radiogroup",
                "rows": [
                 {
                  "value": "Row 1",
                  "text": {
                   "de": "Sprachdatenverarbeitung, einschl. Chatbots, Text Mining, maschineller Übersetzung, Stimmungsanalyse",
                   "en": "Natural Language Processing incl. chatbots, text mining, machine translation, sentiment analysis"
                  }
                 },
                 {
                  "value": "Row 2",
                  "text": {
                   "de": "Bildverarbeitung / Bilderkennung",
                   "en": "Computer vision / image recognition"
                  }
                 },
                 {
                  "value": "Row 3",
                  "text": {
                   "de": "Audioverarbeitung / Spracherkennung, verarbeitung und synthese ",
                   "en": "Audio processing / speech recognition, processing and synthesis"
                  }
                 },
                 {
                  "value": "Row 4",
                  "text": {
                   "de": "Robotik und autonome Geräte",
                   "en": "Robotics and autonomous devices"
                  }
                 },
                 {
                  "value": "Row 5",
                  "text": {
                   "de": "Business Intelligence, Datenanalysen, Empfehlungssysteme, Entscheidungsunterstützungssysteme, intelligente Steuerungssysteme",
                   "en": "Business intelligence, data analytics, decision support systems, recommendation systems, intelligent control systems"
                  }
                 }
                ]
               }
        ],
        "description": {
         "de": "M2.5. Automatisierung und künstliche Intelligenz",
         "en": "M2.5. Automation and Artificial Intelligence"
        }
       }
      ]
     },
     {
      "name": "EUSMEPage8",
      "elements": [
       {
        "type": "panel",
        "name": "EUSMEPanel11",
        "elements": [
         {
          "type": "checkbox",
          "name": "EUSMEQuestion24",
          "title": {
           "de": "Wie nutzt Ihr Unternehmen die digitalen Technologien, um zur ökologischen Nachhaltigkeit beizutragen? Bitte wählen Sie alle zutreffenden Optionen aus",
           "en": "How does your enterprise make use of digital technologies to contribute to environmental sustainability? Please select all options that apply"
          },
          "defaultValue": [
           " "
          ],
          "choices": [
           {
            "value": "Item 1",
            "text": {
             "de": "Nachhaltiges Geschäftsmodell (z. B. Kreislaufwirtschaftsmodell, Product-as-a-Service (Produkt als Dienstleistung))",
             "en": "Sustainable business model (e.g. circular economy model, product-as-a-service)"
            }
           },
           {
            "value": "Item 2",
            "text": {
             "de": "Nachhaltige Erbringung von Dienstleistungen (z. B. Nutzungsverfolgung zur Weiterverwendung durch andere Nutzer)",
             "en": "Sustainable service provision (e.g. usage tracking for further reuse by other users)"
            }
           },
           {
            "value": "Item 3",
            "text": {
             "de": "Nachhaltige Produkte (z. B. ökologische Konzeption, durchgängige Produktlebenszyklusplanung, Entsorgung am Ende der Lebensdauer und Verlängerung der Nutzungsdauer)",
             "en": "Sustainable products (e.g. eco-design, end-to-end product lifecycle planning, end-of-life & extension of useful life)"
            }
           },
           {
            "value": "Item 4",
            "text": {
             "de": "Nachhaltige Produktions- und Herstellungsverfahren, Materialien und Komponenten (einschließlich Entsorgung am Ende der Lebensdauer)",
             "en": "Sustainable production and manufacturing methods, materials and components (incl. endof-life management)"
            }
           },
           {
            "value": "Item 5",
            "text": {
             "de": "Emissionen, Umweltverschmutzung und/oder Abfallwirtschaft",
             "en": "Emissions, pollution and/or waste management"
            }
           },
           {
            "value": "Item 6",
            "text": {
             "de": "Nachhaltige Energieerzeugung in eigener Anlage",
             "en": "Sustainable energy generation in own facility"
            }
           },
           {
            "value": "Item 7",
            "text": {
             "de": "Optimierung des Rohstoffverbrauchs/der Rohstoffkosten",
             "en": "Optimisation of raw material consumption/cost"
            }
           },
           {
            "value": "Item 8",
            "text": {
             "de": "Senkung der Transport- und Verpackungskosten",
             "en": "Reduction of transport and packaging costs"
            }
           },
           {
            "value": "Item 9",
            "text": {
             "de": "Digitale Anwendungen zur Förderung eines verantwortungsvollen Verbraucherverhaltens",
             "en": "Digital applications to encourage responsible consumer behaviour"
            }
           },
           {
            "value": "Item 10",
            "text": {
             "de": "Papierlose Verwaltungsverfahren",
             "en": "Paperless administrative processes"
            }
           }
          ]
         },
         {
          "type": "matrix",
          "name": "EUSMEQuestion25",
          "title": {
           "de": "Berücksichtigt Ihr Unternehmen bei seinen Digitalisierungsentscheidungen und digitalen Abläufen auch die Auswirkungen auf die Umwelt? Bitte bewerten Sie alle zutreffenden Optionen",
           "en": "Is your enterprise taking into account environmental impacts in its digital choices and practices? Please grade all options that apply using this scale"
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
             "de": "Das Unternehmen trägt aktiv Sorge für das Recycling/die Wiederverwendung alter technischer Geräte",
             "en": "Recycling/re-use of old technological equipment is actively practised by the enterprise"
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

export { EUSMEJSON };
