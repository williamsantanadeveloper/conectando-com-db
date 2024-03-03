
app.get('/usuarios/todos', function (request, response) {

    db.query("SELECT * FROM usuarios;", function (error, rows) {

        error ? error : usuarios = rows;

        // response.send(usuarios); browser
        console.log(usuarios);
    })
});
