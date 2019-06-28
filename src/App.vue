<template>
    <v-app>
        <v-tabs fixed-tabs v-model="tabs">
            <v-tab :href="'#tab-parameters'">
                Parameters
                <v-icon size="22" right>create</v-icon>
            </v-tab>
            <v-tab :href="'#tab-results'">
                Results
                <v-icon size="25" right>bar_chart</v-icon>
            </v-tab>
        </v-tabs>

        <v-content>
            <v-tabs-items v-model="tabs">
                <v-tab-item :value="'tab-parameters'">
                    <Parameters v-bind:data="parameters"></Parameters>
                </v-tab-item>
                <v-tab-item :value="'tab-results'">
                    <Plot></Plot>
                </v-tab-item>
            </v-tabs-items>
        </v-content>

        <v-toolbar prominent>
            <v-btn color="primary" v-on:click="sim" v-bind:loading="running">
                Simulate
                <v-icon right>play_circle_outline</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <!--<v-progress-circular indeterminate color='primary' size='36' v-if="running"></v-progress-circular>-->
        </v-toolbar>
    </v-app>
</template>

<script>
import Parameters from "./components/Parameters";
import Plot from "./components/Plot";

export default {
    name: "App",
    components: {
        Parameters,
        Plot
    },

    data() {
        return {
            tabs: "tab-parameters",

            running: false,

            shots: {
                x: [],
                y: [],
                z: []
            },

            parameters: {
                muzzle_velocity: {
                    label: "Muzzle velocity",
                    init: 75.0,
                    min: 65.0,
                    max: 85.0,
                    unit: "m/s",
                    step: 1.0,
                    current: 0.0
                },
                mass: {
                    label: "Mass",
                    init: 180.0,
                    min: 140.0,
                    max: 220.0,
                    unit: "g",
                    step: 1.0,
                    current: 0.0
                },
                initial_attack_angle: {
                    label: "Initial attack angle",
                    init: 8.0,
                    min: 0.0,
                    max: 16.0,
                    unit: "º",
                    step: 1.0,
                    current: 0.0
                },
                cross_wind_speed: {
                    label: "Cross wind speed",
                    init: 0.0,
                    min: 0.0,
                    max: 10.0,
                    unit: "m/s",
                    step: 1.0,
                    current: 0.0
                },
                trigger_error: {
                    label: "Trigger error",
                    init: 0.01,
                    min: 0.01,
                    max: 0.15,
                    unit: "º",
                    step: 0.01,
                    current: 0.0
                },
                sighting_error: {
                    label: "Sighting error",
                    init: 0.0,
                    min: 0.0,
                    max: 0.07,
                    unit: "º",
                    step: 0.01,
                    current: 0.0
                },
                shaking_error: {
                    label: "Shaking error",
                    init: 0.0,
                    min: 0.0,
                    max: 0.1,
                    unit: "º",
                    step: 0.01,
                    current: 0.0
                },
                elevation_error: {
                    label: "Elevation error",
                    init: 0.0,
                    min: 0.0,
                    max: 0.2,
                    unit: "º",
                    step: 0.01,
                    current: 0.0
                },
                fuze_error: {
                    label: "Fuze error",
                    init: 0.0,
                    min: 0.0,
                    max: 1.0,
                    unit: "ms",
                    step: 0.1,
                    current: 0.0
                },
                number_of_shots: {
                    label: "Number of shots to simulate",
                    init: 1,
                    min: 1,
                    max: 100,
                    unit: "",
                    step: 1,
                    current: 0.0
                }
            }
        };
    },

    computed: {
        sim_button() {
            return {
                text: this.running ? "Cancel" : "Simulate",
                icon: this.running ? "cancel" : "play_circle_outline"
            };
        }
    },

    methods: {
        sim() {
            this.running = true;

            this.shots.x.length = 0;
            this.shots.y.length = 0;
            this.shots.z.length = 0;

            for (var i = 0; i < this.parameters.number_of_shots.current; ++i) {
                this.shots.x.push(Math.random() * 10);
                this.shots.y.push(Math.random() * 10);
                this.shots.z.push(Math.random() * 10);
            }

            setTimeout(() => {
                this.running = false;
                this.tabs = "tab-results";
            }, 3000);
        }
    }
};
</script>

