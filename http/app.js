let http = require("http")

http.createServer(function(requisicao,resposta){
    resposta.end("<h1>HELLO WORLD!!!</h1>");
}).listen(1998)
// eu que criei o servidor pela porta 1998 acessivel em http://localhost:1998/