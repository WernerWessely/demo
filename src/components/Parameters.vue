<template>
    <v-content>
        <v-container fluid>
            <v-layout column>
                <v-flex>
                    <v-data-table :items="table_items" hide-headers hide-actions disable-initial-sort>
                        <template v-slot:items="props">
                        <td width="200px" class="text-xs-left">{{ props.item.label }}</td>
                        <td width="150px" class="text-xs-left">{{ props.item.current }} {{ props.item.unit }}</td>
                        <td width="200px">
                            <v-slider height="16" v-model="props.item.current" :min="props.item.min" :max="props.item.max" :step="props.item.step"></v-slider>
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
    </v-content>
</template>

<script>
  export default {
    data () {
      return {
        parameters: {
            muzzle_velocity:        {label: 'Muzzle velocity',              init: 75.0,     min: 65.0,  max : 85.0,     unit: 'm/s',    step: 1.0,  current: 0.0},
            mass:                   {label: 'Mass',                         init: 180.0,    min: 140.0, max : 220.0,    unit: 'g',      step: 1.0,  current: 0.0},
            initial_attack_angle:   {label: 'Initial attack angle',         init: 8.0,      min: 0.0,   max : 16.0,     unit: 'º',      step: 1.0,  current: 0.0},
            cross_wind_speed:       {label: 'Cross wind speed',             init: 0.0,      min: 0.0,   max : 10.0,     unit: 'm/s',    step: 1.0,  current: 0.0},
            trigger_error:          {label: 'Trigger error',                init: 0.01,     min: 0.01,  max : 0.15,     unit: 'º',      step: 0.01, current: 0.0},
            sighting_error:         {label: 'Sighting error',               init: 0.0,      min: 0.0,   max : 0.07,     unit: 'º',      step: 0.01, current: 0.0},
            shaking_error:          {label: 'Shaking error',                init: 0.0,      min: 0.0,   max : 0.1,      unit: 'º',      step: 0.01, current: 0.0},
            elevation_error:        {label: 'Elevation error',              init: 0.0,      min: 0.0,   max : 0.2,      unit: 'º',      step: 0.01, current: 0.0},
            fuze_error:             {label: 'Fuze error',                   init: 0.0,      min: 0.0,   max : 1.0,      unit: 'ms',     step: 0.1,  current: 0.0},
            number_of_shots:        {label: 'Number of shots to simulate',  init: 1,        min: 1,     max : 100,      unit: '',       step: 1,    current: 0.0},
        },
      }
    },

    computed: {
        table_items () {
            return Object.values(this.parameters)
        }
    },

    methods: {
        reset () {
            this.table_items.forEach( (item) => {
                item.current = item.init
            })
        }
    },

    mounted () {
        this.reset()
    }
  }
</script>

