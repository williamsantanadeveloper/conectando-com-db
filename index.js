const express = require('express');
const app = express();
app.use(express.urlencoded());
app.use(express.json());

const read = require('./operations/read');
const create = require('./operations/create');
const delete1 = require('./operations/delete');
const update = require('./operations/update');
// ...


app.get('/usuarios/todos', function (request, response) {
    read.readAllUsers(request, response)
})
app.get('/usuarios/:id', function (request, response) {
    read.readUser(request, response)
})

app.post('/usuarios/criar', function (request, response) {
    create.createUser(request, response)
})

app.delete('/usuarios/deletar', function (request, response) {
    delete1.deleteUser(request, response);
})

app.put('/usuarios/atualizar', function (request, response) {
    update.updateTable(request, response);
})

app.listen(8000, () => {
    console.log(`To ouvindo a porta ${8000}`)
})