import { Router } from 'express'
import controllers from './week.controller'
console.log(controllers)
const router = Router()

// /api/list
router
  .route('/')
  .get(controllers.getMany)
  .post(controllers.createOne)

// /api/list/:id
router
  .route('/:id')
  .get(controllers.getOne)
  .put(controllers.updateOne)
  .delete(controllers.removeOne)

router.route('/:id/:day').get(controllers.getDay)
router
  .route('/:id/:day/:mealTime')
  .get(controllers.getManyMeals)
  .post(controllers.addMeal)

router
  .route('/:id/:day/:mealTime/:mealId')
  .get(controllers.getOneMeal)
  .put(controllers.updateMeal)
  .delete(controllers.removeMeal)

export default router
