const GetSMEInformation = {
    "locale": "de",
    "title": {
        "de": "Kundeninformationen",
        "en": "Customer information"
    },
    "pages": [
        {
            "name": "page1",
            "elements": [
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
                            "name": "EUPSOQuestion3",
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
                                    "name": "EUPSOQuestion4",
                                    "title": {
                                        "de": "Name",
                                        "en": "Name"
                                    },
                                    "defaultValue": ""
                                },
                                {
                                    "type": "text",
                                    "name": "EUPSOQuestion5",
                                    "title": {
                                        "de": "Funktion in der Einrichtung",
                                        "en": "Role in the organisation"
                                    },
                                    "defaultValue": ""
                                },
                                {
                                    "type": "text",
                                    "name": "EUPSOQuestion6",
                                    "title": {
                                        "de": "E-Mail-Adresse",
                                        "en": "Email address"
                                    },
                                    "inputType": "email",
                                    "defaultValue": ""
                                },
                                {
                                    "type": "text",
                                    "name": "EUPSOQuestion7",
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
                            "name": "EUPSOQuestion8",
                            "title": {
                                "de": "Website",
                                "en": "Website"
                            },
                            "inputType": "url",
                            "defaultValue": ""
                        },
                        {
                            "type": "text",
                            "name": "EUPSOQuestion9",
                            "title": {
                                "de": "Jahr der Unternehmensgründung",
                                "en": "Enterprise’s foundation year"
                            },
                            "defaultValue": ""
                        },
                        {
                            "type": "radiogroup",
                            "name": "EUPSOQuestion10",
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
                            "name": "EUPSOQuestion11",
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
                                    "name": "EUPSOQuestion13",
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
                                    "name": "EUPSOQuestion14",
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
            ]
        }
    ],
    "showQuestionNumbers": "off",
    "showProgressBar": "top",
    "showPreviewBeforeComplete": false,
    "widthMode": "static",
    "questionTitlePattern": "numTitle",
    "width": "900",
    "fitToContainer": true
}

export { GetSMEInformation };
