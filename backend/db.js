require('dotenv').config()
const {MongoClient} = require('mongodb')

//create mongodb database connection
let dbConnection
let uri = process.env.API_URI

module.exports = {
    connectToDb : (cb) => {
        MongoClient.connect(uri)
        .then((client)=>{
            dbConnection = client.db()
            return cb()
        })
        .catch(err =>{
            console.log(err)
            return cb(err)
        })
    },
    getDb: () => dbConnection
}