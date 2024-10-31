import { createRouter, createWebHistory } from 'vue-router';
import AboutUs from '@/views/AboutUs.vue';
import RandomFacts from '@/views/RandomFacts.vue';
import ContactUs from '@/views/ContactUs.vue';

const routes = [
  { path: '/about', component: AboutUs },
  { path: '/random-facts', component: RandomFacts },
  { path: '/contact', component: ContactUs },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
