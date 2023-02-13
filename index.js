const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const connection = require("./database/database")
//Database
connection.authenticate().then(()=>{
    console.log("Conexão feita com o banco de dados")
}).catch((msgErro)=>{
    console.log(msgErro)
})

//Falando para o Express usar o EJS como view engine
app.set('view engine','ejs');
app.use(express.static('public'));
//Body parser
app.use(bodyParser.urlencoded({extended: false}));// ele vai premitir que o bodyParse traduz os dados para uma estrutura javascript
app.use(bodyParser.json());//perimite ler formularios utilizando json
//Rotas
app.get("/",(req,res)=>{
    res.render("index")
});
app.get("/question",(req,res)=>{
    res.render("perguntar")
})
app.post("/saveQuestion",(req,res)=>{
    var titulo = req.body.titulo
    var descricao = req.body.descricao
    res.send(`Formulario recebido titulo ${titulo} descricao ${descricao}`)
})
app.listen(8080,()=>{
    console.log("App rodando!")
});