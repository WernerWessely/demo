<template>
    <v-content>
    </v-content>
</template>

<script>


export default {
    components:{
    },
    data () {
        return {
            data:[{
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
            }],
            layout:{margin: {
                l: 0,
                r: 0,
                b: 0,
                t: 0
            }}
        }
    }
}
</script>

