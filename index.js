const express = require('express');
const db = require('../backend/database/db');

const app = express();
app.use(express.json());

app.use('/',require('../backend/routes/authrouter'));

app.listen(8000, () => {
    console.log("Server running");
    db.connect((err) => {
        if (err) throw err;
        console.log("DB Connected Succesfully");
    })
})