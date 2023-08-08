import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import MasonryWall from "@yeger/vue-masonry-wall";
import VueEasyLightbox from 'vue-easy-lightbox'
import { createVfm } from 'vue-final-modal'
import { VueClipboard } from '@soerenmartius/vue3-clipboard'

import 'vue-final-modal/style.css'
const app = createApp(App);

app.use(MasonryWall)
app.use(VueEasyLightbox);
app.use(createVfm());
app.use(VueClipboard);

app.mount('#app')
