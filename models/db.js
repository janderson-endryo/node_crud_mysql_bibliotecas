// conectando ao banco de dados

const Sequelize = require('sequelize')

const conectando = new Sequelize('bd_agenda', 'root', '12345', {
    host: "localhost",
    dialect: "mysql"
})

module.exports = {
    Sequelize: Sequelize,
    conectando: conectando
}

conectando.authenticate().then(function(){
    console.log("conectado com sucessor!")
}).catch(function(erro){
    console.log(`falhar ao se conecta: ${erro}`)
})

