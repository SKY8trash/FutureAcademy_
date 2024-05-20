import "./assets/main.css"

import { createApp } from "vue"
import { createPinia } from "pinia"
import App from "./App.vue"
import router from "./router"
import PrimeVue from "primevue/config"
import Dropdown from "primevue/dropdown"
const app = createApp(App)

app.use(PrimeVue)
app.component(Dropdown, Dropdown)
app.use(createPinia())
app.use(router).mount("#app")
