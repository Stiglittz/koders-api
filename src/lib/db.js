/* const mongoose = require("mongoose")

const {DB_USER, DB_PASSWORD, DB_HOST, DB_NAME} = process.env

const URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

function connect () {
    return mongoose.connect(URI)
}

module.exports= { connect } */

const mongoose = require("mongoose");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;

function connect() {
    return mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log('Connected to the database');
    }).catch((error) => {
        console.error('Database connection error:', error);
    });
}

module.exports = { connect };
