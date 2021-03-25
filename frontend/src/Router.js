import {createRouter, createWebHistory} from 'vue-router';

import z1 from './components/Z1.vue'
import z2 from './components/Z2.vue'
import z3 from './components/Z3.vue'
import home from './components/photo.vue'

const Router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            component: home
        },
        {
            path: '/z1',
            component: z1
        },
        {
            path: '/z2',
            component: z2
        },
        {
            path: '/z3',
            component: z3
        },
]
});

export default Router;