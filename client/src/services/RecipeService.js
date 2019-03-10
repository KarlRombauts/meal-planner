import Api from '@/services/Api'

export default {
  fetchRecipes() {
    return Api().get('recipe')
  },
  fetchSingleRecipe(params) {
    return Api().get(`recipe/${params.recipeId}/`)
  }
}
