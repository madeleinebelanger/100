const mongoose = require('mongoose')

const GratitudeSchema = new mongoose.Schema({
  gratitudeItem1: {
    type: Array,
    required: false,
  },
  userId: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
})

module.exports = mongoose.model('Gratitude', GratitudeSchema)
