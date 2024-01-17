import { createRouter, createWebHistory } from "vue-router";

import HomePage from './pages/projects/HomePage.vue';
import ProjectIndex from './pages/projects/Index.vue';
import Contact from './pages/projects/Contact.vue';
import ProjectShow from './pages/projects/Show.vue';
import NotFound from './pages/projects/404.vue';
import TypeArchive from './pages/types/Archive.vue';

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
            path: '/type/:name',
            name: 'types.archive',
            props: true,
            component: TypeArchive
        },
        {
            path: '/contatti',
            name: 'contacts',
            component: Contact
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFound
        }
    ]
});

export { router };