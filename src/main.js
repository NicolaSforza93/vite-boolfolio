import { createApp } from 'vue'
import App from './App.vue'

import { router } from './router';

import "bootstrap/dist/css/bootstrap.css";

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
library.add(faChevronRight, faChevronLeft);

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

import "bootstrap/dist/js/bootstrap.js"


