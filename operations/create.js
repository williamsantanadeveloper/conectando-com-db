const db = require('../connection');

function createUser(request, response) {
    db.query(`INSERT INTO usuarios (nome) values ('${request.body.nome}')`,
        function (error, rows) {
            error
                ? error
                : usuarios = rows

            response.send(usuarios);
        })
}

module.exports = { createUser };