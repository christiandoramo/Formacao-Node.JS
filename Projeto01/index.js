const express = require('express')
const app = express()
const bodyParser = require('body-parser')
// bodyparser converte as informações do post para uma forma legivel pelo js
const connection = require('./database/database')

connection
  .authenticate()
  .then(() => {
    console.log('conexão com database rodando')
  })
  .catch((erro) => {
    console.log(erro)
  })

app.set('view engine', 'ejs')
app.use(express.static('public')) // também lerá os arquivos do bootstrap em public
app.use(bodyParser.urlencoded({ extended: false })) // decodificação com o bodyparser
app.use(bodyParser.json()) // lê agora os json

app.get('/', (requisicao, resposta) => {
  resposta.render('index')
})
app.get('/perguntar', (requisicao, resposta) => {
  resposta.render('perguntar')
})

app.post('/postpergunta', (requisicao, resposta) => {
  let titulo = requisicao.body.titulo
  let descricao = requisicao.body.descricao
  titulo = titulo
  descricao = descricao
  resposta.send(
    `Formulario postado com sucesso\nTítulo: ${titulo} Descrição: ${descricao}`,
  )
})
app.listen(10, () => console.log('rodando server'))
