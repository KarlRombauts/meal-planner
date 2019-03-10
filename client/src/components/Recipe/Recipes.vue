<template>
  <div class="recipes">
  <section>
    <div :key="recipe" v-for="recipe in recipes">
      <router-link :to="{ name: 'Recipe', params: { id: recipe._id } }">
        <h2>{{recipe.name}}</h2>
      </router-link>
      <router-link :to="{ name: 'EditRecipe' }">Edit recipe</router-link>
      
    </div>
  </section>
  </div>
</template>

<script>
import RecipeService from '@/services/RecipeService'
import pluralize from 'pluralize'
export default {
  name: 'recipes',
  data () {
    return {
      recipes: [],
    }
  },
  mounted () {
    this.getRecipes()
    pluralize.addUncountableRule('g')
    pluralize.addUncountableRule('ml')
  },
  methods: {
    async getRecipes () {
      const response = await RecipeService.fetchRecipes()
      this.recipes = response.data.data
    },
    pluralize,
  }
}
</script>
<style style="css" scoped>
</style>
