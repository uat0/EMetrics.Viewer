import { createRouter, createWebHashHistory } from 'vue-router';
import MetricsHome from './App.vue'
import MetricsAbout from './components/AboutUs.vue'
import MetricsCounters from './components/Counters.vue'

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
    ]
})