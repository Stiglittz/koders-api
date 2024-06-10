const createError = require('http-errors')
const usersUsecase = require("../usecases/users.usecase")

const jwt = require("../lib/jwt")

async function auth(req, res, next) {
    try {
        const token = req.headers.authorization

        if (!token) {
            throw createError(401, "JWT is required")
        }
    
        const payload = jwt.verify(token)

        const user = await usersUsecase.getById(payload. id)

        req.user = user

        next()
    } catch (error) {
        res.status(401)
        res.json({
            success: false,
            error: error.message,
        })
    }
}

module.exports = auth