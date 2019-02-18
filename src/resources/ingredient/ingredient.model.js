import mongoose from 'mongoose'
const ingredient = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  amount: {
    type: Number,
    required: true
  },
  unit: {
    type: String,
    required: true
  },
  brand: {
    type: String
  }
})

export const Ingredient = mongoose.model('ingredient', ingredient)
