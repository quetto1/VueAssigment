import Vue from 'vue'
import App from './App.vue'
import Home from './components/Other/Home.vue'
import RegButtonGreen  from './components/buttons/RegisterButtonGreen.vue'
import SignInButtonGreen from './components/buttons/SignInButtonGreen.vue'
import RegButtonBlack  from './components/buttons/RegisterButtonBlack.vue'
import SignInButtonBlack from './components/buttons/SignInButtonBlack.vue'
import RegisterWithFacebook from './components/buttons/RegisterWithFacebook.vue'
import EmialInput from './components/inputs/EmailInput.vue'
import UsernameInput from './components/inputs/UsernameInput.vue'
import PasswordInput from './components/inputs/PasswordInput.vue'
import ExitButton from './components/buttons/ExitButton.vue'

import Registration from './components/banner/Registration.vue'
import SignIn from './components/banner/SignIn.vue'


//Banners
Vue.component('Registration', Registration);

//Inputs
Vue.component('EmailInput', EmialInput);
Vue.component('UsernameInput', UsernameInput);
Vue.component('PasswordInput', PasswordInput);

//Buttons
Vue.component('RegisterButtonGreen',RegButtonGreen);
Vue.component('SignInButtonGreen',SignInButtonGreen);
Vue.component('RegisterButtonBlack',RegButtonBlack);
Vue.component('SignInButtonBlack',SignInButtonBlack);

Vue.component('ExitButton',ExitButton);
Vue.component('Facebook-button', RegisterWithFacebook);
//Test Example 
Vue.component('app-server-status', Home);


const routes = {
  '/': SignIn,
  '/register': Registration
}

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
})