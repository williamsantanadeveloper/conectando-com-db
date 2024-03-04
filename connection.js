const mysql = require('mysql');

// Cuidado, não é o jeito certo de fazer!!!
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'davigay'
})

db.connect(function (error) {
    if (error) {
        throw error
    };
    console.log("Connected!");
});

db.connect(function (error) {
    if (error) {
        throw error
    };
    console.log("Connected!");
});

module.exports = db;