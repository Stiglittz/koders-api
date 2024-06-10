const mongoose = require("mongoose")

const modelName = "posts"

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 100,
    },
    image: {
        type: String,
        required: false,
        maxLength: 100,
    },
    body: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 1000,
      },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
    updated_at: {
      type: Date,
      default: Date.now,
    },
})

module.exports = mongoose.model(modelName, schema)