const db = require('../connection');

const updateTable = (request, response) => {
    db.query("ALTER TABLE usuarios add email VARCHAR(255);",
        function (error, rows) {
            error ? error : usuarios = rows

            response.send(usuarios);
        })
}

module.exports = { updateTable };