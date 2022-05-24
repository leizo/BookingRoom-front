import { createApp, markRaw } from 'vue';
import { createPinia, PiniaVuePlugin } from 'pinia';
import App from './App.vue';
import router from "./routers";

const app = createApp(App);

const pinia = createPinia();
pinia.use(({store}) => {
    store.$router = markRaw(router);
});

app.use(pinia);
app.use(router);


app.mount('#app');
