import mongoose from 'mongoose'

const recipe = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  ingredients: [
    {
      ingredient: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'ingredient'
      },
      quantity: {
        type: Number,
        required: true
      },
      unit: {
        type: String
      }
    }
  ],
  instructions: [{ type: String }],
  duration: {
    prep: { type: Number },
    cooking: { type: Number }
  },
  tags: [{ type: String }]
})

export const Recipe = mongoose.model('recipe', recipe)
