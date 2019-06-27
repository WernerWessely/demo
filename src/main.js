import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

// Here we make all global libraries available
// (https://dzone.com/articles/use-any-javascript-library-with-vuejs)

Object.defineProperty(Vue.prototype, '$plotly', { value: require('plotly.js-dist') });

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
