<template>
    <h5> {{ $t(filename + '.bim4vidAnswers') }}</h5>
    <br>
    <div v-if="trafficLightKPI">
        <div class="container">
            <div class="row">
                <div class="box">
                    <b>Selbsteinschätzung nach Masterplan</b>
                    <br><br>
                    <div class="row">
                        <div class="col">
                            <div class="box"> Implementierung der BIM-Methode
                                <trafficLight :color=trafficLightKPI[0] />
                            </div>
                        </div>
                        <div class="col">
                            <div class="box"> BIM-Projekteinsatz
                                <trafficLight :color=trafficLightKPI[1] />
                            </div>
                        </div>
                        <div class="col">
                            <div class="box"> BIM-Anwendungsfälle
                                <trafficLight :color=trafficLightKPI[2] />
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
                            <div class="box"> Dokumentation nach VDI 2552-1
                                <trafficLight :color=trafficLightKPI[3] />
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
                            <div class="box"> Managementunterstützung
                                <trafficLight :color=trafficLightKPI[4] />
                            </div>
                        </div>
                        <div class="col">
                            <div class="box">BIM-Bedeutung für Organisation
                                <trafficLight :color=trafficLightKPI[5] />
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
                            <div class="box"> BIM-Schulungen und -Zertifikate
                                <trafficLight :color=trafficLightKPI[6] />
                            </div>
                        </div>
                        <div class="col">
                            <div class="box"> BIM-Mindset
                                <trafficLight :color=trafficLightKPI[7] />
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
                            <div class="box"> OIA/AIA nach ISO 19650-1
                                <trafficLight :color=trafficLightKPI[8] />
                            </div>
                        </div>
                        <div class="col">
                            <div class="box"> Besondere Vertragsbedingungen BIM
                                <trafficLight :color=trafficLightKPI[9] />
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
                            <div class="box"> Unterstützung Auftragnehmer
                                <trafficLight :color=trafficLightKPI[10] />
                            </div>
                        </div>
                        <div class="col">
                            <div class="box"> Bürgerinformation
                                <trafficLight :color=trafficLightKPI[11] />
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
                            <div class="box"> Prozesse und Übersichten
                                <trafficLight :color=trafficLightKPI[12] />
                            </div>
                        </div>
                        <div class="col">
                            <div class="box"> Dokumentation von BIM-Wissen
                                <trafficLight :color=trafficLightKPI[13] />
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
                            <div class="box"> Software
                                <trafficLight :color=trafficLightKPI[14] />
                            </div>
                        </div>
                        <div class="col">
                            <div class="box"> Hardware
                                <trafficLight :color=trafficLightKPI[15] />
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
                            <div class="box"> CDE nach DIN SPEC 91391-1
                                <trafficLight :color=trafficLightKPI[16] />
                            </div>
                        </div>
                        <div class="col">
                            <div class="box"> Interoperabilität
                                <trafficLight :color=trafficLightKPI[17] />
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