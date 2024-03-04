const db = require('../connection')

function readAllUsers(request, response) {
    db.query("SELECT * FROM usuarios;", function (error, rows) {
        error
            ? error
            : usuarios = rows

        response.send(usuarios);
    })
}

function readUser(request, response) {
    db.query(`SELECT * FROM usuarios where id='${request.params.id}';`,
        function (error, rows) {
            error
                ? error
                : usuarios = rows

            response.send(usuarios);
        })
}

module.exports = { readAllUsers, readUser }