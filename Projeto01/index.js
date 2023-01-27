const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public')) // também lerá os arquivos do bootstrap em public

app.get('/', (requisicao, resposta) => {
  resposta.render('index')
})
app.get('/perguntar', (requisicao, resposta) => {
  resposta.render('perguntar')
})

app.listen(10, () => console.log('rodando server'))
