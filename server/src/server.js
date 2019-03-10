import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import config from './config'
import cors from 'cors'
import { connect } from './utils/db'
import ingredientRouter from './resources/ingredient/ingredient.router'
import recipeRouter from './resources/recipe/recipe.router'
import weekRouter from './resources/week/week.router'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use('/api/ingredient', ingredientRouter)
app.use('/api/recipe', recipeRouter)
app.use('/api/week', weekRouter)

export const start = async () => {
  try {
    await connect('mongodb://localhost:27017/meal-planner')
    app.listen(config.port, () => {
      console.log(`REST API on http://localhost:${config.port}/api`)
    })
  } catch (e) {
    console.error(e)
  }
}
