import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Weeks from '@/components/Weeks'
import Week from '@/components/Week'
import Day from '@/components/Day'
import Recipes from '@/components/Recipe/Recipes'
import Recipe from '@/components/Recipe/Recipe'
import EditWeek from '@/components/EditWeek'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/weeks',
      name: 'Weeks',
      component: Weeks
    },
    {
      path: '/weeks/:id',
      name: 'Week',
      component: Week
    },
    {
      path: '/weeks/:id/edit',
      name: 'EditWeek',
      component: EditWeek
    },
    {
      path: '/weeks/:id/:day',
      name: 'Day',
      component: Day
    },
    {
      path: '/recipes',
      name: 'Recipes',
      component: Recipes
    },
    {
      path: '/recipes/:id',
      name: 'Recipe',
      component: Recipe
    }
  ]
})
