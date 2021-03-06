import { Router } from 'express'
import controllers from './ingredient.controller'
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

export default router
