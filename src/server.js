const express = require("express")

const usersRouter = require("./routes/users.router")
const authRouter = require("./routes/auth.router")
const postsRouter = require("./routes/posts.router")

const app = express()


app.use(express.json())

app.use("/users", usersRouter)
app.use("/auth", authRouter)
app.use("/posts", postsRouter)


app.get("/", (req, res) => {
    res.json({
        message: "koders-api"
    })
})

module.exports = app