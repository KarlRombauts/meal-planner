import { Router } from 'express'
import controllers from './recipe.controller'
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

router
  .route('/:id/ingredients')
  .get(controllers.getManyIngredients)
  .post(controllers.addIngredient)

router
  .route('/:id/ingredients/:ingredientId')
  .get(controllers.getOneIngredient)
  .put(controllers.updateIngredient)
  .delete(controllers.removeIngredient)
export default router
