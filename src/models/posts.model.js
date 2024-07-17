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
        maxLength: 500,
    },
    body: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 1000,
      },
    user: { // Author de Post
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
    updated_at: {
      type: Date,
      default: Date.now,
    },
    tags: [{
      type: String,
      enum: [
        'webdev', 'javascript', 'beginners', 'programming', 'tutorial',
        'react', 'python', 'devops', 'ai', 'productivity',
        'aws', 'opensource', 'node', 'learning', 'typescript',
        'css', 'java', 'news', 'career', 'linux',
        'html', 'database', 'machinelearning', 'security', 'discuss',
        'api', 'testing', 'frontend', 'php', 'design'
      ]
    }],
})

module.exports = mongoose.model(modelName, schema)