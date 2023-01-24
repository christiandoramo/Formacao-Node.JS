// com a biblioteca nodemon executando o index.js com o comando nodemon index.js ao inves de com o node o servidor é reiniciado automaticamente após o salvamento do arquivo semelhante como o live server

const express = require('express') //importando express.js
const app = express() // e logo em seguida iniciando o modulo express que foi requerido com express()

// a função é realmente escrita no segundo parametro
app.get('/', function (requisicao, resposta) {
  //toda rota de requisiçao deve ter uma unica resposta, ou entrará num loop infinito ou erro
  resposta.send('<h1>Hello World</h1>')
}) // barra significa rota inicial -: pagina inicial

app.get('/perfil', function (requisicao, resposta) {
  resposta.send('Bem-vindo ao seu perfil')
})

app.get('/Hello/:nome/:idade?', function (requisicao, resposta) {
  //requisicao -> informação de entrada enviada pelo usuario como um dado ou um pedido
  //resposta -> informação de saída que o usuario receberá
  // ATENÇÂO: o valor do parametro nunca pode ser vazio
  // ja o segundo parametro pode ser nulo por conta da '?'
  const nome = requisicao.params.nome // pegando o que está no parametro do metodo GET como em PHP
  const idade = requisicao.params.idade
  if (idade) {
    // se idade existe logo é true, se não é null logo false
    resposta.send(
      '<h1>Eu sou ' + nome + ' e tenho ' + idade + ' anos de idade!!!</h1>',
    )
  } else {
    resposta.send('<h1>Eu sou ' + nome + '!!!</h1>')
  }
})

app.get('/:queryparam/:nome', function (requisicao, resposta) {
  let entradaQuery = requisicao.query['valor']
  // valor pega o param :nome
  // url correto possivel http://localhost:10/queryparam/nome?valor=Christian
  if (entradaQuery) resposta.send('Meu nome é: ' + entradaQuery)
  else resposta.send('Sem nome')
})

app.listen(10, function connect(erro) {
  if (erro) {
    console.log('Erro na conexão')
  } else {
    console.log('Conectou-se com sucesso')
  }
})
