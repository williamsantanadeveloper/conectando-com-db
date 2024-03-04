const db = require('../connection');

const deleteUser = (request, response) => {
    db.query('DELETE FROM usuarios WHERE id > 2;',
        function (error, rows) {
            error
                ? error
                : usuarios = rows

            response.send(usuarios);
        })

}

module.exports = { deleteUser };