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
          <Parameters></Parameters>
        </v-tab-item>
        <v-tab-item  :value="'tab-results'">
          Results
        </v-tab-item>
      </v-tabs-items>
    </v-content>

    <v-toolbar prominent>
      <v-btn color='primary' v-on:click="running = !running">{{ sim_button.text }}<v-icon right>{{ sim_button.icon }}</v-icon></v-btn>
      <v-spacer></v-spacer>
      <v-progress-circular indeterminate color='primary' size='36' v-if="running"></v-progress-circular>
    </v-toolbar>

  </v-app>
</template>

<script>

import Parameters from './components/Parameters'

export default {
  name: 'App',
  components: {
    Parameters
  },

  data () {
    return {
      tabs: 'tab-parameters',
      running: false,
    }
  },

  computed: {
    sim_button () {
      return {
        text: this.running ? 'Cancel' : 'Simulate',
        icon: this.running ? 'cancel' : 'play_circle_outline',
      }
    }
  },
}

</script>

