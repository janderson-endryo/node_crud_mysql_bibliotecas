const db = require('./db')

const cadastra = db.conectando.define('cadastros', {
    nome: {
        type : db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    telefone: {
        type: db.Sequelize.INTEGER
    }
})

module.exports = cadastra

//cadastra.sync({force: true})