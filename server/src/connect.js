const mongoose = require('mongoose')
mongoose.Promise = global.Promise

export const connect = url =>
  mongoose.connect(
    url,
    { useNewUrlParser: true }
  )
