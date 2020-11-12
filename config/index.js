require('dotenv').config();

const config = {
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
}

module.exports = { config }
