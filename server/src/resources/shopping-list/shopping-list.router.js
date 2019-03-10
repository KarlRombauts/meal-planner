import { Router } from 'express'
import controllers from './shopping-list.controller'
const router = Router()

// /api/list
router.route('/').get(controllers.getItems)
