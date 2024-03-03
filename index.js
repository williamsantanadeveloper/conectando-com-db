const express = require('express');
const mysql = require('mysql');
const app = express();

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

app.get('/usuarios/todos', function (request, response) {

    db.query("SELECT * FROM usuarios;", function (error, rows) {

        error ? error : usuarios = rows;

        // response.send(usuarios); browser
        console.log(usuarios);
    })
});

app.listen(8000, () => {
    console.log(`Estou ouvindo a porta ${8000}`)
})