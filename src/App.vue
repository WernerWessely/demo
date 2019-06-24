<template>
  <v-app>

    <v-tabs fixed-tabs v-model="tabs">
      <v-tab :href="'#tab-parameters'">
        Parameters
        <v-icon size='22' right>create</v-icon>
      </v-tab>
      <v-tab :href="'#tab-results'">
        Results
        <v-icon size='25' right>bar_chart</v-icon>
      </v-tab>
    </v-tabs>

    <v-content>
      <v-tabs-items v-model="tabs">
        <v-tab-item :value="'tab-parameters'">
          Parameters
        </v-tab-item>
        <v-tab-item  :value="'tab-results'">
          Results
        </v-tab-item>
      </v-tabs-items>
    </v-content>

    <v-toolbar height='70'>
      <v-btn color='primary'>
      Simulate
      <v-icon right>play_circle_outline</v-icon>
      </v-btn>
       <v-btn color='primary'>
      Cancel
      <v-icon right>cancel</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <!--Running
      <v-progress-circular indeterminate color='primary' size='30'></v-progress-circular>-->
      
    </v-toolbar>

  </v-app>
</template>

<script>
import ValueSlider from './components/ValueSlider'

export default {
  name: 'App',
  components: {
    ValueSlider
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
      },
      tabs : 'tab-parameters'
    }
  }
}

</script>

