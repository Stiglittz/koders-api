const createHttpError = require("http-errors")
const Posts = require("../models/posts.model")


async function createPost(postData, userId) {

    const newPost = await Posts.create(postData, userId)
    return newPost
}

async function getAllPosts(search) {
    if(!search) {
        return await Posts.find().populate('user')
    }
    const allPosts = await Posts.find({title: {$regex: search, $options: 'i'}}).populate('user')

    if (allPosts.length === 0) {
        throw createHttpError(404, 'Post not found')
    }
    return allPosts
}

async function deletePostById(id) {
    const postDeleted = Posts.findByIdAndDelete(id)

    if (!postDeleted) {
        throw createHttpError(404, 'Post not found')
    }

    return postDeleted
}

async function updatePost(id, newData) {

    const post = await Posts.findById(id)

    if(!post) {
        throw createHttpError(404, "Post not found")
    }

    newData.user == post.user

    const updatedPost = await Posts.findByIdAndUpdate(id, newData, {
        new: true,
    })
    return updatedPost
}

module.exports = {
    createPost,
    getAllPosts,
    deletePostById,
    updatePost,
}