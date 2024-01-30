const express = require('express')
const { connectToDb, getDb } = require('./db')
const routes = require('./routes');
const cors = require('cors');

// init app & middleware
const app = express()
app.use(cors());

app.use(express.json());
app.use('/', routes);

// db connection
let db


connectToDb((err) => {
    if (!err) {
        app.listen(3000, () => {
            console.log('App listening on port 3000')
        })
        db = getDb()
    }
})
