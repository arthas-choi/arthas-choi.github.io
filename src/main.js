import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import MasonryWall from "@yeger/vue-masonry-wall";
import VueEasyLightbox from 'vue-easy-lightbox'

const app = createApp(App);

app.use(MasonryWall)
app.use(VueEasyLightbox);

app.mount('#app')
