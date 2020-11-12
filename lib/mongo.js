
const mongoDB = require('mongoose');
const { config } = require("../config");

const DB_NAME = config.dbName;

const MONGO_URI = `mongodb://${config.dbHost}/${DB_NAME}`; 

mongoDB.Promise = global.Promise; 

async function connect(){
    
    await mongoDB.connect(MONGO_URI, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true 
    })
    console.log('[Connected successfully to mongo]')
}

module.exports = connect;
