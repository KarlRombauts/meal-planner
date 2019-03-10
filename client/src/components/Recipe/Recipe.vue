<template>
  <div class="recipe">
  <section>
      <router-link :to="{ name: 'EditRecipe' }">Edit recipe</router-link>
      <h2>{{recipe.name}}</h2>
      <h3>Ingredients</h3>
      <p v-if="recipe.ingredients.length === 0">
        There are currently no instructions for this recipe
      </p>
      <ul v-else>
        <li :key="ingredient" v-for="ingredient in recipe.ingredients">
          {{ ingredient.quantity }} 
          {{ pluralize(ingredient.unit, ingredient.quantity) }} 
          - {{ ingredient.ingredient.name }}
        </li>
      </ul> 
      <h3>Instructions</h3>
      <p v-if="recipe.instructions.length === 0">
        There are currently no instructions for this recipe
      </p>
      <ol v-else>
        <li :key="instruction" v-for="instruction in recipe.instructions">
          {{ instruction }} 
        </li>
      </ol>  
      
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
      recipe: null,
    }
  },
  mounted () {
    this.getRecipes()
    pluralize.addUncountableRule('g')
    pluralize.addUncountableRule('ml')
  },
  methods: {
    async getRecipes () {
      const response = await RecipeService.fetchSingleRecipe({recipeId: this.$route.params.id})
      this.recipe = response.data.data
    },
    pluralize,
  }
}
</script>
<style style="css" scoped>
</style>
