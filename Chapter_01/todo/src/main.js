import Vue from 'vue'
import App from './App.vue'

/*
  Configuring app & registering third-party packages.
*/

Vue.config.productionTip = false

// This `import` ensures that the CSS 
//  will be included in the application (later for details).
import "bootstrap/dist/css/bootstrap.min.css";

new Vue({
  render: h => h(App),
}).$mount('#app')