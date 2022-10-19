import { createRouter, createWebHistory } from 'vue-router'
import Calculator from '../views/Calculator.vue'
import Stringmanipulation from '../views/Stringmanipulation.vue'
import Dashboard from '../views/Dashboard.vue'
import About from '../views/About.vue'
import Aboutt from '../views/Aboutt.vue'
import Area from '../views/Area.vue'
import Quiz from '../views/Quiz.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/Stringmanipulation',
      name: 'Stringmanipulation',
      component: Stringmanipulation
    },
    {
    path: '/Calculator',
    name: 'Calculator',
    component: Calculator
    },

 
    {
        path: '/About',
        name: 'About',
        component: About
      },
      {
        path: '/Aboutt',
        name: 'Aboutt',
        component: Aboutt
      },
      {
        path: '/Area',
        name: 'Area',
        component: Area
      },

      {
        path: '/Quiz',
        name: 'Quiz',
        component: Quiz
      },
      
    
  ]
})

export default router
