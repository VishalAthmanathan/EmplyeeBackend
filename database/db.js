const pg = require('pg');

const db = new pg.Client({
    user:"postgres",
    host:"Localhost",
    database:"practicetraining",
    password:"admin",
    port:5432
});

module.exports=db;