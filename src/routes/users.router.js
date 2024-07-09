const express = require("express")
const userUsecase = require("../usecases/users.usecase")

const router = express.Router()

// GET /users
router.get("/", async (req, res) =>  {
    try {
        const users = await userUsecase.getAll()

        res.json({
            succes: true,
            data: { users }
        })
    } catch (error) {
        res.status(error.status || 500)
        res.json({
            success: false,
            error: error.message,
        })
    }
})

// POST /users
router.post("/register", async (req, res) => {
    try {
        const userCreated = await userUsecase.create(req.body)

        res.json({
            succes: true,
            data: { user: userCreated },
        })
    } catch (error) {
        res.status(error.status || 500)
        res.json({
            success: false,
            error: error.message,
        })
    }
})

// GET /koders/:id
router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id
        const user = await userUsecase.getById(id)

        res.json({
            success: true,
            data: { user },
        })
    } catch (error) {
        res.status(error.status || 500)
        res.json({
            success: false,
            error: error.message,
        })
    }
})

// DELETE /koders/:id
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params
        const userDeleted = await userUsecase.deleteById(id)

        res.json({
            succes: true,
            data: { user: userDeleted },
        })

    } catch (error) {
        res.status(error.status || 500)
        res.json({
            success: false,
            error: error.message,
        })
    }
})

// PATCH /koders:id
router.patch("/:id", async (req, res) => {
    try {
        const { id } = req.params
        const userUpdated = await userUsecase.updateById(id, req.body)

        res.json({
            success: true,
            data: { user: userUpdated},
        })
    } catch (error) {
        res.status(error.status || 500)
        res.json({
            success: false,
            error: error.message,
        })
    }
    
})

module.exports = router