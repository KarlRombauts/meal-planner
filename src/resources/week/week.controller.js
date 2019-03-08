import { crudControllers } from '../../utils/crud'
import { Week } from './week.model'
// import { Day } from '../day/day.model'

export default {
  ...crudControllers(Week),
  getDay: async (req, res) => {
    try {
      const doc = await Week.findOne({ _id: req.params.id })
        .lean()
        .exec()

      if (!doc) {
        return res.status(400).end()
      }

      res.status(200).json({ data: doc.days[req.params.day] })
    } catch (e) {
      console.error(e)
      res.status(400).end()
    }
  },

  getManyMeals: async (req, res) => {
    try {
      const doc = await Week.findOne({ _id: req.params.id })
        .lean()
        .exec()

      if (!doc) {
        return res.status(400).end()
      }

      res
        .status(200)
        .json({ data: doc.days[req.params.day][req.params.mealTime] })
    } catch (e) {
      console.error(e)
      res.status(400).end()
    }
  },
  addMeal: async (req, res) => {
    try {
      const mealData = {}
      mealData[`days.${req.params.day}.${req.params.mealTime}`] = req.body
      const doc = await Week.findByIdAndUpdate(
        { _id: req.params.id },
        { $push: mealData },
        { new: true }
      )
        .lean()
        .exec()
      res
        .status(201)
        .json({ data: doc.days[req.params.day][req.params.mealTime] })
    } catch (e) {
      console.error(e)
      res.status(400).end()
    }
  },
  removeMeal: async (req, res) => {
    try {
      const mealData = {}
      mealData[`days.${req.params.day}.${req.params.mealTime}`] = {
        _id: req.params.mealId
      }

      const doc = await Week.findByIdAndUpdate(
        { _id: req.params.id },
        { $pull: mealData },
        { new: true }
      )
        .lean()
        .exec()
      res
        .status(201)
        .json({ data: doc.days[req.params.day][req.params.mealTime] })
    } catch (e) {
      console.error(e)
      res.status(400).end()
    }
  },

  getOneMeal: async (req, res) => {
    try {
      const doc = await Week.findOne({ _id: req.params.id })
        .lean()
        .exec()

      if (!doc) {
        return res.status(400).end()
      }
      const meals = doc.days[req.params.day][req.params.mealTime]
      const singleMeal = meals.filter(
        meal => String(meal._id) === req.params.mealId
      )[0]
      res.status(200).json({ data: singleMeal })
    } catch (e) {
      console.error(e)
      res.status(400).end()
    }
  },
  updateMeal: async (req, res) => {
    const condition = { _id: req.params.id }
    condition[`days.${req.params.day}.${req.params.mealTime}._id`] =
      req.params.mealId

    const updatedMealData = {}
    updatedMealData[`days.${req.params.day}.${req.params.mealTime}.$`] =
      req.body
    try {
      const doc = await Week.findOneAndUpdate(
        condition,
        { $set: updatedMealData },
        { new: true }
      ).exec()
      res
        .status(201)
        .json({ data: doc.days[req.params.day][req.params.mealTime] })
    } catch (e) {
      console.error(e)
      res.status(400).end()
    }
  }
}
