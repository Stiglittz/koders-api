const express = require('express')
const postUsecase = require('../usecases/posts.usecase')
const auth= require('../middlewares/auth.middleware')

const router = express.Router()

router.post('/', auth, async (req, res) => {
    try {
        const postData = {
            ...req.body,
            user: req.user._id
        }

        const createdPost = await postUsecase.createPost(postData);
        res.json({
            success: true,
            data: { createdPost }
        });
    } catch(error) {
        res.status(error.status || 500);
        res.json({
            success: false,
            error: error.message
        });
    }
});

router.patch('/:id', auth, async (req, res) => {
    try{
        const { id } = req.params
        const updatedPost = await postUsecase.updatePost(id, req.body)
        res.json({
            success: true,
            data: { post: updatedPost }
        })
    }catch(error) {
        res.status(error.status || 500);
        res.json({
            success: false,
            error: error.message
        })
    }
})

router.get('/', async (req, res) => {
    try{
        const { search } = req.query
        const posts = await postUsecase.getAllPosts(search)
        res.json({
            success: true,
            data: { posts }
        })
    } catch(error) {
        res.status(error.status || 500);
        res.json({
            success: false,
            error: error.message
        })
    }
})


router.delete('/:id', auth, async (req, res) => {
    try {
        const { id } = req.params;
        const deletedPost = await postUsecase.deletePostById(id)
        res.json({
            success: true,
            data: { post: deletedPost }
        });
    } catch(error) {
        res.status(error.status || 500);
        res.json({
            success: false,
            error: error.message
        });
    }
});

module.exports = router