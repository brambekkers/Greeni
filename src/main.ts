import { createApp } from 'vue';
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import Drawer from 'primevue/drawer';
import Button from 'primevue/button';
import { router } from './router';

import './style.scss';
import App from './App.vue';

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: '.dark-mode',
    },
  },
});

app.component('Button', Button);
app.component('Drawer', Drawer);

app.mount('#app');
