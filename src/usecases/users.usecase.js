const createError = require("http-errors");
const encrypt = require("../lib/encrypt");
const Users = require("../models/users.model");

async function create(userData) {
    try {
        console.log("Checking if user already exists with email:", userData.email);
        const userFound = await Users.findOne({ email: userData.email });

        if (userFound) {
            console.log("User already exists:", userFound);
            throw createError(409, "Email already in use");
        }

        console.log("Encrypting password for user:", userData.email);
        userData.password = await encrypt.encrypt(userData.password);

        console.log("Creating new user with data:", userData);
        const newUser = await Users.create(userData);
        console.log("New user created:", newUser);
        return newUser;
    } catch (error) {
        console.error("Error in user creation:", error);
        throw error;
    }
}

async function getById(id) {
    const user = await Users.findById(id);
    return user;
}

module.exports = {
    create,
    getById,
};




/*const createError = require("http-errors")
const encrypt = require("../lib/encrypt")
const Users = require("../models/users.model")


async function create(userData) {
    const userFound = await Users.findOne({ email: userData.email })

    if (userFound) {
        throw createError(409, "Email already in use")
    }

    userData.password = await encrypt.encrypt(userData.password)

    const newUser = await Users.create(userData)
    return newUser
}

async function getById(id) {
    const user = await Users.findById(id)/* .populate("generation") */
    /* return user */
 /*


module.exports = {
    create,
    getById,
} */