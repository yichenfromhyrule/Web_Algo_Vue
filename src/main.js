import Vue from 'vue';
import App from './App.vue';
import * as firebase from "firebase";
import vuetify from './plugins/vuetify';
import router from "./router";

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyA0Qznm4b958e7FYli1mP0BQVul8iZSSxE",
  authDomain: "vue-algoweb.firebaseapp.com",
  projectId: "vue-algoweb",
  storageBucket: "vue-algoweb.appspot.com",
  messagingSenderId: "640559063909",
  appId: "1:640559063909:web:1c11da38048d30ba80778c",
  measurementId: "G-Z1PJ9E65FE"
}


firebase.initializeApp(firebaseConfig);

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
