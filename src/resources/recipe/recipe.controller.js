import { crudControllers } from '../../utils/crud'
import { Recipe } from './recipe.model'

export default {
  ...crudControllers(Recipe),
  getMany: async (req, res) => {
    try {
      const docs = await Recipe.find({})
        .populate('ingredients.ingredient')
        .lean()
        .exec()

      res.status(200).json({ data: docs })
    } catch (e) {
      console.error(e)
      res.status(400).end()
    }
  }
}
