<template>
    <v-container fluid>
        <v-layout>
            <v-flex>
                <div id="plot" ref="plot"></div>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    props: ["shots"],

    data() {
        return {
            params: [
                {
                    x: this.shots.x,
                    y: this.shots.y,
                    z: this.shots.z,
                    mode: "markers",
                    marker: {
                        color: "default",
                        size: 8,
                        symbol: "circle",
                        line: {
                            color: "rgb(204, 204, 204)",
                            width: 1
                        },
                        opacity: 0.9
                    },
                    type: "scatter3d"
                }
            ],
            layout: {
                autosize: true,
                margin: {
                    l: 0,
                    r: 0,
                    b: 0,
                    t: 0
                }
            }
        };
    },

    methods: {
        create_plot() {
            this.$plotly.newPlot(this.$refs.plot, this.params, this.layout);
        },

        update_plot() {
            this.$plotly.update(this.$refs.plot, this.params, this.layout);
        },

        resize_plot() {
            this.$plotly.relayout(this.$refs.plot, {
                width: window.innerWidth - 80,
                height: window.innerHeight - 200
            });
        }
    },

    watch: {
        shots: {
            handler() {
                this.update_plot();
            },
            deep: true
        }
    },

    mounted() {
        this.create_plot();
    },

    created() {
        window.addEventListener("resize", this.resize_plot);
    },

    destroyed() {
        window.removeEventListener("resize", this.resize_plot);
    }
};
</script>

