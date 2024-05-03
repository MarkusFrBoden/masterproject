<template>
    <h5> {{ $t(filename + '.bim4vidAnswers') }}</h5>
    <br>
    <div v-if="trafficLightKPI">
        <div class="container">
            <div class="row">
                <div class="box">
                    <b>Selbsteinschätzung nach <a
                            href="https://www.bim-bundesfernstrassen.de/fileadmin/user_upload/BIM_Masterplan_Bundesfernstrassen_barrierefrei.pdf"
                            target="_blank">Masterplan</a></b>
                    <br><br>
                    <div class="row">
                        <div class="col">
                            <div class="box" style="height: 90%;"> <b>Implementierung der BIM-Methode</b>
                                <div class="row">
                                    <div class="col-sm-2 d-flex align-items-center justify-content-center">
                                        <trafficLight :color=trafficLightKPI[0] />
                                    </div>
                                    <div class="col">
                                        <p>Mit Hilfe von <a href="https://www.bimdeutschland.de/service/downloads"
                                                target="_blank">BIM Deutschland</a>, <a href="https://www.bim-bundesfernstrassen.de/publikationen/"
                                                target="_blank">BIM Bundesfernstraßen</a> und Vorbildorganisationen wie der <a href="https://www.deges.de/building-information-modeling-bim/"
                                                target="_blank">DEGES</a> gelingt eine schnelle BIM-Einführung.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="box" style="height: 90%;"> <b>BIM-Projekteinsatz</b>
                                <div class="row">
                                    <div class="col-sm-2 d-flex align-items-center justify-content-center">
                                        <trafficLight :color=trafficLightKPI[1] />
                                    </div>
                                    <div class="col">
                                        <p>Nutzen Sie die Erkenntnisse aus <a
                                                href="https://www.bimdeutschland.de/bim-wissen/auf-dem-weg-zu-bim/bim-pilot-und-forschungsprojekte"
                                                target="_blank">BIM-Pilot- und Forschungsprojekten</a> für Ihren eigenen Einstieg in das Bauen mit BIM.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="box" style="height: 90%;"> <b>BIM-Anwendungsfälle</b>

                                <div class="row">
                                    <div class="col-sm-2 d-flex align-items-center justify-content-center">
                                        <trafficLight :color=trafficLightKPI[2] />
                                    </div>
                                    <div class="col">
                                        <p>Die zu erreichenden <a
                                                href="https://www.bimdeutschland.de/fileadmin/media/Downloads/Download-Liste/BIM4INFRA/3_6_BIM4INFRA2020_AP4_Teil6.pdf"
                                                target="_blank">BIM4INFRA-Anwendungsfälle</a> sind in den
                                            Rahmendokumenten <a
                                                href="https://www.bimdeutschland.de/fileadmin/media/Downloads/Download-Liste/Strasse/BIM_RD_Anwendungsfaelle_V1_0_barrierefrei.pdf"
                                                target="_blank">I</a> und <a
                                                href="https://www.bim-bundesfernstrassen.de/fileadmin/user_upload/Rahmendokumente/bim-rd-anwendungsfaelle-phase-II.pdf"
                                                target="_blank">II</a> dargestellt.
                                        </p>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="box">
                    <b>BIM-Ziele und -Strategie</b>
                    <br><br>
                    <div class="row">
                        <div class="col">
                            <div class="box" style="height: 90%;"> <b>Dokumentation nach VDI 2552-1</b>
                                <div class="row">
                                    <div class="col-sm-1 d-flex align-items-center justify-content-center">
                                        <trafficLight :color=trafficLightKPI[3] />
                                    </div>
                                    <div class="col">
                                        <p>Gemäß „Anhang A - Hinweise zur Einführung von BIM in Organisationen“ der
                                            VDI-Richtlinie 2552-1 steht die Einführung und Nutzung der BIM-Methode in
                                            Abhängigkeit mit organisationsbedingten Faktoren. Alle Ziele, Pläne und
                                            Erkenntnisse bezüglich der Einführung der BIM-Methode sollten innerhalb der
                                            Organisation in einem BIM-Strategie-Konzept verschriftlicht werden. Dieses
                                            Konzept muss von der Leitung der Organisation freigegeben und kommuniziert
                                            werden. Das Implementierungsmuster besteht aus den vorbereitenden Schritten
                                            Be-standsaufnahme, Definition der Ziele, Erstellung des Konzepts und
                                            gegebenenfalls der An-passung der Organisationsziele, -strategie und
                                            -vision.
                                        </p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col"></div>
                                    <div class="col"><a
                                            href="https://www.deges.de/wp-content/uploads/2023/08/BIM-Leitfaden-2.0.pdf?type=original"
                                            target="_blank">BIM-Leitfaden DEGES</a></div>
                                    <div class="col"><a
                                            href="https://www.deutschebahn.com/resource/blob/6876006/c4ae3a7c344b770a0e762aa73406598c/Implementierung-von-BIM-im-VR-I-data.pdf"
                                            target="_blank">BIM-Strategie der DB AG</a></div>
                                    <div class="col"><a
                                            href="https://www.bimdeutschland.de/fileadmin/media/Downloads/Download-Liste/BIM4INFRA/3_1_BIM4INFRA2020_AP4_Teil1.pdf"
                                            target="_blank">BIM4INFRA Grundlagen</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="box">
                    <b>Struktur, Organisation und Management</b>
                    <br><br>
                    <div class="row">
                        <div class="col">
                            <div class="box" style="height: 90%;"> <b>Managementunterstützung</b>
                                <div class="row">
                                    <div class="col-sm-1 d-flex align-items-center justify-content-center">
                                        <trafficLight :color=trafficLightKPI[4] />
                                    </div>
                                    <div class="col">
                                        <p>Für die erfolgreiche Implementierung von BIM in Organisationen ist die
                                            Unterstützung durch das Management besonders wichtig. Um diese Unterstützung
                                            gewährleisten zu können, muss mit zunehmendem Reifegrad mehr BIM-Wissen auf
                                            den Ebenen mit Personalverantwortung vorhanden sein. Kennen Sie schon die <a
                                                href="https://www.wba-weimar.de/seminare/bim-late-night"
                                                target="_blank">BIM Late Night</a> der Weiterbildungsakademie der
                                            Bauhaus-Universität Weimar? Jetzt mit EDIH-Sponsoring 50% günstiger!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="box" style="height: 90%;"> <b>BIM-Bedeutung für Organisation</b>

                                <div class="row">
                                    <div class="col-sm-1 d-flex align-items-center justify-content-center">
                                        <trafficLight :color=trafficLightKPI[5] />
                                    </div>
                                    <div class="col">
                                        <p>Investieren sie bereits in ihre digitalen Möglichkeiten? Testen Sie jetzt die
                                            Dienstleistungen von EDIH, zum Beispiel im Bereich der Beschaffung von
                                            Fördermitteln für BIM-Pilotprojekte.
                                        </p>
                                        <a href="https://edih.digital/moodle/course/index.php?categoryid=1"
                                            target="_blank">EDIH Beratung zu Fördermitteln, Finanzierungs- und
                                            Geschäftsmodellen für digitale Vorhaben</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="box">
                    <b>Menschen und Unternehmenskultur </b>
                    <br><br>
                    <div class="row">
                        <div class="col">
                            <div class="box" style="height: 90%;"> <b>BIM-Schulungen und -Zertifikate</b>

                                <div class="row">
                                    <div class="col-sm-1 d-flex align-items-center justify-content-center">
                                        <trafficLight :color=trafficLightKPI[6] />
                                    </div>
                                    <div class="col">
                                        <p>Auch für Ihre Mitarbeiterinnen und Mitarbeiter! Die EDIH-geförderte <a
                                                href="https://www.wba-weimar.de/seminare/bim-late-night"
                                                target="_blank">BIM Late Night</a> der Bauhaus Weiterbildungsakademie
                                            ist ab sofort verfügbar. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="box" style="height: 90%;"> <b>BIM-Mindset</b>

                                <div class="row">
                                    <div class="col-sm-1 d-flex align-items-center justify-content-center">
                                        <trafficLight :color=trafficLightKPI[7] />
                                    </div>
                                    <div class="col">
                                        <p>Ihre Mitarbeiterinnen und Mitarbeiter sind das Rückrad ihrer
                                            BIM-Implementierung! Führen Sie BIM-Workshops durch, eröffnen Sie
                                            Ideenportale und lassen sie ihre Mitarbeitenden so an der digitalen
                                            Tranformation teilhaben. Digitalisierung geht nur gemeinsam! </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="box">
                    <b>Regulierungen und Verträge </b>
                    <br><br>
                    <div class="row">
                        <div class="col">
                            <div class="box" style="height: 90%;"> <b>OIA/AIA nach ISO 19650-1</b>
                                <div class="row">
                                    <div class="col-sm-1 d-flex align-items-center justify-content-center">
                                        <trafficLight :color=trafficLightKPI[8] />
                                    </div>
                                    <div class="col">
                                        <p> Brauchen Sie noch Anregungen für Ihre optimalen Kundenanforderungen? Keine
                                            Sorge, Sie sind nicht allein. Nutzen Sie die BIM4INFRA-Vorlagen für <a
                                                href="https://www.bimdeutschland.de/fileadmin/media/Downloads/Download-Liste/BIM4INFRA/3_2_BIM4INFRA2020_AP4_Teil2.pdf"
                                                target="_blank">Auftraggeber-Informationsanforderungen</a> und den <a
                                                href="https://www.bimdeutschland.de/fileadmin/media/Downloads/Download-Liste/BIM4INFRA/3_3_BIM4INFRA_AP4_Teil3.pdf"
                                                target="_blank">BIM-Ausführungsplan</a>! </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="box" style="height: 90%;"> <b>Besondere Vertragsbedingungen BIM</b>
                                <div class="row">
                                    <div class="col-sm-1 d-flex align-items-center justify-content-center">
                                        <trafficLight :color=trafficLightKPI[9] />
                                    </div>
                                    <div class="col">
                                        <p> BIM4INFRA unterstützt sie auch bei ihren <a
                                                href="https://www.bimdeutschland.de/fileadmin/media/Downloads/Download-Liste/BIM4INFRA/3_4_BIM4INFRA2020_AP4_Teil4.pdf"
                                                target="_blank">Leistungsbeschreibungen</a> und <a
                                                href="https://www.bimdeutschland.de/fileadmin/media/Downloads/Download-Liste/BIM4INFRA/3_5_BIM4INFRA2020_AP4_Teil5.pdf"
                                                target="_blank">Vertragsbedingungen</a>! </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="box">
                    <b>Stakeholder </b>
                    <br><br>
                    <div class="row">
                        <div class="col">
                            <div class="box" style="height: 90%;"> <b>Unterstützung Auftragnehmer</b>
                                <div class="row">
                                    <div class="col-sm-1 d-flex align-items-center justify-content-center">
                                        <trafficLight :color=trafficLightKPI[10] />
                                    </div>
                                    <div class="col">
                                        <p> Das Baugewerbe unterscheidet sich von anderen Branchen des verarbeitenden
                                            Gewerbes durch den individuellen Charakter der Bauprojekte. Die
                                            Markteintrittsbarrieren sind aufgrund nicht notwendiger Produktionsanlagen
                                            vergleichsweise gering, was zu einer Struktur vieler KMU mit geringen
                                            Investitionsmöglichkeiten in digitalen Bereichen führt <a
                                                href="https://www.sciencedirect.com/science/article/abs/pii/S2452414X22000802"
                                                target="_blank">Quelle</a>.
                                            Erfolgreiche digitale Projekte sind nur gemeinsam möglich. Helfen Sie mit,
                                            organisieren Sie Workshops und geben Sie Ihr Wissen an Ihre Projektpartner
                                            weiter. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="box" style="height: 90%;"> <b>Bürgerinformation</b>
                                <div class="row">
                                    <div class="col-sm-1 d-flex align-items-center justify-content-center">
                                        <trafficLight :color=trafficLightKPI[11] />
                                    </div>
                                    <div class="col">
                                        <p> Lagepläne und langwierige Forumsdiskussionen gehören der Vergangenheit an.
                                            Nutzen Sie die digitalen und virtuellen Möglichkeiten von BIM und
                                            ermöglichen Sie den Bürgerinnen und Bürgern einen besseren Einblick in die
                                            Projekte. <a href="https://www.youtube.com/watch?v=c5UbGEWbII4"
                                                target="_blank">Bürgerinformation mit BIM am Beispiel Stuttgart 21</a>
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="box">
                    <b> Prozesse </b>
                    <br><br>
                    <div class="row">
                        <div class="col">
                            <div class="box" style="height: 90%;"> <b>Prozesse und Übersichten</b>
                                <div class="row">
                                    <div class="col-sm-1 d-flex align-items-center justify-content-center">
                                        <trafficLight :color=trafficLightKPI[12] />
                                    </div>
                                    <div class="col">
                                        <p>Was passiert, wenn der 5D-Experte das Unternehmen verlässt? Stellen Sie
                                            sicher, dass sein Wissen über BIM-Prozesse allgemein verständlich
                                            festgehalten wird. Für eine gemeinsame Sprache bietet sich z.B. der genormte
                                            Standard <a href="https://www.bpmn.de/lexikon/bpmn/"
                                                target="_blank">BPMN</a> an. Tools wie <a
                                                href="https://miro.com/aq/paid-search/bpmn-diagram/?utm_source=bing&utm_medium=cpc&utm_campaign=S%7CBNG%7CNB%7CDE%7CALL-EN%7CTIER2%7CCHANN&utm_adgroup=1148991348635643&utm_term=kwd-71812649280342:loc-72&matchtype=e&utm_content=&device=cmsclkid=077cafe6476111fe9588c9d2fd6b42f8&loc=119956"
                                                target="_blank">miro</a>, <a href="https://www.drawio.com/"
                                                target="_blank">draw.io</a>, <a href="https://camunda.com/de/"
                                                target="_blank">Camunda</a> und viele andere helfen bei der Erstellung
                                            von XML-Dateien, die dann interoperabel verwendet werden können. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="box" style="height: 90%;"> <b>Dokumentation von BIM-Wissen</b>
                                <div class="row">
                                    <div class="col-sm-1 d-flex align-items-center justify-content-center">
                                        <trafficLight :color=trafficLightKPI[13] />
                                    </div>
                                    <div class="col">
                                        <p>Wissensmanagement ist eine der wichtigsten Organisationsaufgaben, die leider
                                            viel zu oft vernachlässigt wird. Sorgen Sie mit Tools wie <a
                                                href="https://www.nuclino.com/de/loesungen/unternehmens-wiki"
                                                target="_blank">Nuclino</a> dafür, dass Ihr Wissen auffindbar
                                            dokumentiert ist. </p>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="box">
                    <b> IT-Infrastruktur </b>
                    <br><br>
                    <div class="row">
                        <div class="col">
                            <div class="box" style="height: 90%;"> <b>Software</b>
                                <div class="row">
                                    <div class="col-sm-1 d-flex align-items-center justify-content-center">
                                        <trafficLight :color=trafficLightKPI[14] />
                                    </div>
                                    <div class="col">
                                        <p>Sie brauchen nicht die eine Software, die alle haben. Vergleichen Sie
                                            stattdessen die Angebote für Ihre Prozesse und entscheiden Sie sich dann.
                                            Gute Software muss nicht immer teuer sein, es gibt bereits viele gute Open
                                            Source Lösungen wie hier <a href="https://store.bimserver.center/de"
                                                target="_blank">BIMserver Store</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="box" style="height: 90%;"> <b>Hardware</b>
                                <div class="row">
                                    <div class="col-sm-1 d-flex align-items-center justify-content-center">
                                        <trafficLight :color=trafficLightKPI[15] />
                                    </div>
                                    <div class="col">
                                        <p>Nicht alle Mitarbeiterinnen und Mitarbeiter führen die gleichen BIM-Prozesse
                                            durch. Dementsprechend muss auch die Hardware an die Anforderungen der
                                            Software angepasst werden.
                                            Das neue Rahmendokument <a
                                                href="https://www.bim-bundesfernstrassen.de/fileadmin/user_upload/Handlungsempfehlungen/bim-he-bim-arbeitsplatz-4.0.pdf"
                                                target="_blank">BIM-Arbeitsplatz 4.0</a> des Masterplans
                                            Bundesfernstraßen gibt hierzu Hinweise.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="box">
                    <b> Technologie und Daten </b>
                    <br><br>
                    <div class="row">
                        <div class="col">
                            <div class="box" style="height: 90%;"> <b>CDE nach DIN SPEC 91391-1</b>
                                <div class="row">
                                    <div class="col-sm-1 d-flex align-items-center justify-content-center">
                                        <trafficLight :color=trafficLightKPI[16] />
                                    </div>
                                    <div class="col">
                                        <p>CDEs gibt es mittlerweile wie Sand am Meer. Wählen Sie auch hier das Angebot,
                                            das zu Ihren Prozessen passt. Auch hier gilt: Suchen Sie auch nach offenen
                                            Angeboten. Die <a href="https://biblus.accasoftware.com/de/opencde/"
                                                target="_blank">openCDE</a> ist schon in Entwicklung!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="box" style="height: 90%;"> <b>Interoperabilität</b>

                                <div class="row">
                                    <div class="col-sm-1 d-flex align-items-center justify-content-center">
                                        <trafficLight :color=trafficLightKPI[17] />
                                    </div>
                                    <div class="col">
                                        <p>Lassen Sie sich nicht durch bestimmte Datenformate an Softwarelösungen
                                            binden. Nutzen Sie offene Standards wie <a
                                                href="https://www.buildingsmart.org/standards/bsi-standards/industry-foundation-classes/"
                                                target="_blank">IFC</a>, <a
                                                href="https://technical.buildingsmart.org/standards/bcf/"
                                                target="_blank">BCF</a>, <a
                                                href="https://technical.buildingsmart.org/projects/information-delivery-specification-ids/"
                                                target="_blank">IDS</a> und viele andere. Mit interoperablen Ansätzen
                                            wie buildingSMART machen sie sich flexibel für zukünftige Entwicklungen im
                                            digitalen Bauen.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import trafficLight from "../components/charts/trafficLight.vue";

//filename for language tags
const filename = 'BIM4VIDResultsComp'

//accept props from calling views
let props = defineProps({
    trafficLightKPI: {
        type: Array as () => Array<string>,
        required: true
    }
})

</script>

<style scoped></style>