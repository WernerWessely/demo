<template>
  <v-app>
    <v-content>
        <v-container grid-list-md>
          <v-layout>
            <v-flex md6>
              <v-card>
                <v-card-text>
                  <ValueSlider :data="error_budget.muzzle_v"></ValueSlider>
                  <ValueSlider :data="error_budget.grenade_m"></ValueSlider>
                  <ValueSlider :data="error_budget.init_attack_angle"></ValueSlider>
                  <ValueSlider :data="error_budget.cross_wind_speed"></ValueSlider>
                  <ValueSlider :data="error_budget.trigger_error"></ValueSlider>
                  <ValueSlider :data="error_budget.sighting_error"></ValueSlider>
                  <ValueSlider :data="error_budget.shaking_error"></ValueSlider>
                  <ValueSlider :data="error_budget.elevation_error"></ValueSlider>
                  <ValueSlider :data="error_budget.fuze_error"></ValueSlider>
                  <v-btn color="primary" dark>
                    Simulate
                    <v-icon right dark>play_circle_outline</v-icon>
                  </v-btn>
              </v-card-text>
              </v-card>
            </v-flex>
            <v-flex md6>
              <v-card>
                <v-card-text>
                  <ValuePlot></ValuePlot>
                
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
    </v-content>
  </v-app>
</template>

<script>
import ValueSlider from './components/ValueSlider'
import ValuePlot from './components/ValuePlot'

export default {
  name: 'App',
  components: {
    ValueSlider,
    ValuePlot
  },
  data () {
    return {
      error_budget: {
        muzzle_v : {'name': 'Muzzle velocity', 'init': 75, 'min': 65, 'max' : 85, 'unit': 'm/s', 'step': 1},
        grenade_m : {'name': 'Mass', 'init': 180, 'min': 140, 'max' : 220, 'unit': 'g', 'step': 1},
        init_attack_angle : {'name': 'Initial attack angle', 'init': 8, 'min': 0, 'max' : 16, 'unit': 'º', 'step': 1},
        cross_wind_speed : {'name': 'Cross wind speed', 'init': 0, 'min': 0, 'max' : 10, 'unit': 'm/s', 'step': 1},
        trigger_error : {'name': 'Trigger error', 'init': 0.01, 'min': 0.01, 'max' : 0.15, 'unit': 'º', 'step': 0.01},
        sighting_error : {'name': 'Sighting error', 'init': 0.0, 'min': 0.0, 'max' : 0.07, 'unit': 'º', 'step': 0.01},
        shaking_error : {'name': 'Shaking error', 'init': 0.0, 'min': 0.0, 'max' : 0.1, 'unit': 'º', 'step': 0.01},
        elevation_error : {'name': 'Elevation error', 'init': 0.0, 'min': 0.0, 'max' : 0.2, 'unit': 'º', 'step': 0.01},
        fuze_error : {'name': 'Fuze error', 'init': 0.0, 'min': 0.0, 'max' : 1.0, 'unit': 'ms', 'step': 0.1}
      }
    }
  }
}

</script>

