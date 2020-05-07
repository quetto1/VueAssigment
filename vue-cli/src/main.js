import Vue from 'vue'
import App from './App.vue'
import Home from './components/Other/Home.vue'
import RegButtonGreen  from './components/buttons/RegisterButtonGreen.vue'
import SignInButtonGreen from './components/buttons/SignInButtonGreen.vue'
import RegButtonBlack  from './components/buttons/RegisterButtonBlack.vue'
import SignInButtonBlack from './components/buttons/SignInButtonBlack.vue'


// import RegButton from './components/buttons/RegButton.vue'



Vue.component('RegisterButtonGreen',RegButtonGreen);
Vue.component('SignInButtonGreen',SignInButtonGreen)
Vue.component('RegisterButtonBlack',RegButtonBlack);
Vue.component('SignInButtonBlack',SignInButtonBlack)


//Test Example 
Vue.component('app-server-status', Home);



new Vue({
  el: '#app',
  render: h => h(App)
})
