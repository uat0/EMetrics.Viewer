import { createRouter, createWebHashHistory } from 'vue-router';
import MetricsHome from './components/Home.vue'
import MetricsAbout from './components/AboutUs.vue'
import MetricsCounters from './components/Counters.vue'
import Authentication from './components/Auth.vue'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: MetricsHome,
        },
        {
            path: '/aboutus',
            name: 'aboutus',
            component: MetricsAbout
        },
        {
            path: '/counters',
            name: 'counters',
            component: MetricsCounters
        },
        {
            path: '/auth',
            name: 'auth',
            component: Authentication
        },
    ]
})