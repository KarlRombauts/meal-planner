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
  },
  getOne: async (req, res) => {
    try {
      const docs = await Recipe.find({ _id: req.params.id })
        .populate('ingredients.ingredient')
        .lean()
        .exec()

      res.status(200).json({ data: docs })
    } catch (e) {
      console.error(e)
      res.status(400).end()
    }
  },
  getManyIngredients: async (req, res) => {
    try {
      const docs = await Recipe.findOne({ _id: req.params.id })
        .populate('ingredients.ingredient')
        .lean()
        .exec()
      console.log(docs)
      res.status(200).json({ data: docs.ingredients })
    } catch (e) {
      console.error(e)
      res.status(400).end()
    }
  },

  addIngredient: async (req, res) => {
    try {
      const docs = await Recipe.findByIdAndUpdate(
        { _id: req.params.id },
        { $push: { ingredients: req.body } },
        { new: true }
      )
        .populate('ingredients.ingredient')
        .lean()
        .exec()

      res.status(200).json({ data: docs.ingredients })
    } catch (e) {
      console.error(e)
      res.status(400).end()
    }
  },
  getOneIngredient: async (req, res) => {
    try {
      const doc = await Recipe.findOne({ _id: req.params.id })
        .populate('ingredients.ingredient')
        .lean()
        .exec()

      const ingredient = doc.ingredients.filter(ingredient => {
        return String(ingredient._id) === req.params.ingredientId
      })[0]

      res.status(200).json({ data: ingredient })
    } catch (e) {
      console.error(e)
      res.status(400).end()
    }
  },

  updateIngredient: async (req, res) => {
    try {
      const doc = await Recipe.findOneAndUpdate(
        {
          _id: req.params.id,
          'ingredients._id': req.params.ingredientId
        },
        { $set: { 'ingredients.$': req.body } },
        { new: true }
      )
        .populate('ingredients.ingredient')
        .exec()

      res.status(201).json({ data: doc })
    } catch (e) {
      console.error(e)
      res.status(400).end()
    }
  },

  removeIngredient: async (req, res) => {
    try {
      const doc = await Recipe.findByIdAndUpdate(
        { _id: req.params.id },
        { $pull: { ingredients: { _id: req.params.ingredientId } } },
        { new: true }
      )
        .populate('ingredients.ingredient')
        .exec()

      res.status(200).json({ data: doc.ingredients })
    } catch (e) {
      console.error(e)
      res.status(400).end()
    }
  }
}
