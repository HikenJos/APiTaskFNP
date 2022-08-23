const mongoose = require('mongoose')

const Schema = mongoose.Schema

const TaskSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  time: {
    type: Number,
    require: true,
    default: 0.0
  },
  date: {
    type: Date,
    require: true,
    default: Date.now
  }
})

module.exports = mongoose.model('Task', TaskSchema)
