const GetOrganizationInformation = {
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
                            "name": "EU-1-1-3",
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
                                    "name": "EU-1-1-4",
                                    "title": {
                                        "de": "Name",
                                        "en": "Name"
                                    },
                                    "defaultValue": "" 
                                },
                                {
                                    "type": "text",
                                    "name": "EU-1-1-5",
                                    "title": {
                                        "de": "Funktion in der Einrichtung",
                                        "en": "Role in the organisation"
                                    },
                                    "defaultValue": "" 
                                },
                                {
                                    "type": "text",
                                    "name": "EU-1-1-6",
                                    "title": {
                                        "de": "E-Mail-Adresse",
                                        "en": "Email address"
                                    },
                                    "inputType": "email",
                                    "defaultValue": "" 
                                },
                                {
                                    "type": "text",
                                    "name": "EU-1-1-7",
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
                            "name": "EU-1-1-8",
                            "title": {
                                "de": "Website",
                                "en": "Website"
                            },
                            "inputType": "url",
                            "defaultValue": "" 
                        },
                        {
                            "type": "radiogroup",
                            "name": "EU-1-1-9",
                            "title": {
                                "de": "Art der öffentlichen Einrichtung",
                                "en": "Type of public sector organisation"
                            },
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
                            ],
                            "defaultValue": "" 
                        },
                        {
                            "type": "radiogroup",
                            "name": "EU-1-1-10",
                            "title": {
                                "de": "Zahl der Beschäftigten der Einrichtung",
                                "en": "Organisation’s staff size"
                            },
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
                            ],
                            "defaultValue": "" 
                        },
                        {
                            "type": "multipletext",
                            "name": "EU-1-1-11",
                            "title": {
                                "de": "Vollständige Anschrift",
                                "en": "Full address"
                            },
                            "defaultValue": {
                                "text1": "",
                                "text2": "",
                                "text3": "",
                                "text4": ""
                            },
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
                            "name": "EU-1-2-13",
                            "title": {
                                "de": "Zu welchem der folgenden großen Regierungsbereiche gehört Ihre Einrichtung? Bitte wählen Sie bis zu zwei Optionen aus",
                                "en": "In which of the following government broad areas does your organisation belong2? Please select up to two options"
                            },
                            "elements": [
                                {
                                    "type": "radiogroup",
                                    "name": "EU-1-2-13-1",
                                    "title": {
                                        "de": "Primär (eine Option obligatorisch)",
                                        "en": "Primary (one mandatory)"
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
                                    "showOtherItem": true,
                                    "defaultValue": "" 
                                },
                                {
                                    "type": "radiogroup",
                                    "name": "EU-1-2-13-2",
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
    "width": "900",
    "fitToContainer": true
}

export { GetOrganizationInformation };
