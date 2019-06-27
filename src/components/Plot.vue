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
    mounted() {
        this.$plotly.newPlot(this.$refs["plot"], this.params, this.layout);

        this.resize_plot();
    },

    data() {
        return {
            params: [
                {
                    x: [-0.100387678599, -0.841098362432],
                    y: [0.14252201109, 0.745253687488],
                    z: [-0.0850216981743, 0.0772495602215],
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
        resize_plot() {
            var plot_div = document.getElementById("plot");

            this.$plotly.relayout(plot_div, {
                width: window.innerWidth - 80,
                height: window.innerHeight - 200
            });
        }
    },

    created() {
        window.addEventListener("resize", this.resize_plot);
    },

    destroyed() {
        window.removeEventListener("resize", this.resize_plot);
    }
};
</script>

