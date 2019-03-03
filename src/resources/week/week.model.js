import mongoose from 'mongoose'
// import { Day } from '../day/day.model'

const daySchema = {
  breakfast: [
    {
      recipe: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'recipe'
      },
      servings: { type: Number }
    }
  ],
  lunch: [
    {
      recipe: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'recipe'
      },
      servings: { type: Number }
    }
  ],
  dinner: [
    {
      recipe: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'recipe'
      },
      servings: { type: Number }
    }
  ]
}

const week = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  days: {
    mon: daySchema,
    tue: daySchema,
    wed: daySchema,
    thu: daySchema,
    fri: daySchema,
    sat: daySchema,
    sun: daySchema
  }
})
export const Week = mongoose.model('week', week)
