import mongoose from 'mongoose'
const ingredient = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  brand: {
    type: String
  },
  category: {
    type: String
  }
})

export const Ingredient = mongoose.model('ingredient', ingredient)
