import { createApp } from 'vue'
import App from './App.vue'
import vue3GoogleLogin from 'vue3-google-login'

import './assets/main.css'

const app = createApp(App)

const googleAuthClientID = '199596182134-ns1thsghubabvlbi0ausvsjp6jqf7kak.apps.googleusercontent.com'

app.use(vue3GoogleLogin, {
  clientId: googleAuthClientID
})

app.mount('#app')
