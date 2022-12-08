const express = require('express')
const app = express()

const cadastra = require('./models/cadastra')

// express-handlebars

const handlebars = require('express-handlebars')

// config // template modelo // handlebars

app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// body parser
const bodyparser = require('body-parser')

// config body parser

app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

// rotas

// rota para editar

app.get('/editar/:id', function(req, res){
    cadastra.findByPk(req.params.id)
      .then(cadastra =>{
              res.render('editar', {
                  id: req.params.id,
                  nome: cadastra.nome,
                  email: cadastra.email,
                  telefone: cadastra.telefone
              })
          })
      .catch(err => {
        res.send('Post não encontrado!'+ err)
      })
  })

app.post('/editado/:id', function(req, res){
    cadastra.update({
      nome: req.body.nome,
      email: req.body.email,
      telefone: req.body.telefone
    },
    {
      where: { id: req.params.id }
    }).then(function(){
      res.redirect('/')
    }).catch(function(erro){
      console.log(erro);
    })
  })

// rota para deleta

app.post('/deletar/:id', function(req, res){
    cadastra.destroy({where: {'id': req.params.id}}).then(function(){
        res.redirect("/")
    }).catch(function(erro){
        res.send("erro" + erro)
    })
})

// rota para mostra usuarios

app.get('/', function(req, res){
    cadastra.findAll({order: [['id', 'DESC']]}).then(function(cadastrados) {
    res.render('home', {cadastrados: cadastrados})
    })
})

// rota para acessa o formulario

app.get('/form', function(req, res) {
    res.render('form')
})

// rota para cadastro

app.post('/add', function(req, res) {
    cadastra.create({
        nome: req.body.nome,
        email: req.body.email,
        telefone: req.body.telefone
    }).then(function(){
        res.redirect("/")
    }).catch(function(erro){
        res.send(`usuario nao cadastrado: ${erro}`)
    })
    
})


app.listen(8087,function(){
    console.log("ok...")
});











