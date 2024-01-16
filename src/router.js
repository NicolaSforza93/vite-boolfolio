import { createRouter, createWebHistory } from "vue-router";

import HomePage from './pages/projects/HomePage.vue';
import ProjectIndex from './pages/projects/Index.vue';
import Contact from './pages/projects/Contact.vue';
import ProjectShow from './pages/projects/Show.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/portfolio',
            name: 'projects.index',
            component: ProjectIndex
        },
        {
            path: '/portfolio/:name_project',
            name: 'projects.show',
            props: true,
            component: ProjectShow
        },
        {
            path: '/contatti',
            name: 'contacts',
            component: Contact
        }
    ]
});

export { router };