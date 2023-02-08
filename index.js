const express = require("express");
const app = express();

//Falando para o Express usar o EJS como view engine
app.set('view engine','ejs');
app.use(express.static('public'));

app.get("/",(req,res)=>{
    res.render("index")
});
app.get("/question",(req,res)=>{
    res.render("perguntar")
})
app.post("/saveQuestion",(req,res)=>{
    res.send("Formulario recebido")
})
app.listen(8080,()=>{
    console.log("App rodando!")
});