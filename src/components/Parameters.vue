<template>
    <v-container fluid>
        <v-layout column>
            <v-flex>
                <v-data-table
                    v-bind:items="table_items"
                    hide-headers
                    hide-actions
                    disable-initial-sort
                >
                    <template v-slot:items="props">
                        <td width="200px" class="text-xs-left">{{ props.item.label }}</td>
                        <td
                            width="150px"
                            class="text-xs-left"
                        >{{ props.item.current }} {{ props.item.unit }}</td>
                        <td width="200px">
                            <v-slider
                                height="16"
                                v-model="props.item.current"
                                :min="props.item.min"
                                :max="props.item.max"
                                :step="props.item.step"
                            ></v-slider>
                        </td>
                    </template>
                </v-data-table>
            </v-flex>
            <v-flex>
                <div class="text-xs-right">
                    <v-btn small color="primary" v-on:click="this.reset">Reset</v-btn>
                </div>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    props: ["data"],

    computed: {
        table_items() {
            return Object.values(this.data);
        }
    },

    methods: {
        reset() {
            this.table_items.forEach(item => {
                item.current = item.init;
            });
        }
    },

    mounted() {
        this.reset();
    }
};
</script>

