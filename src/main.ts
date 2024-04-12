import { createApp } from 'vue'
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
