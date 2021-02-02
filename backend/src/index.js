const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const con = require('./conexao/conexao')
const cors = require('cors');
app.use(express.json())
app.use(cors());

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.post('/usuario', (req, res)=>{
  const {cliente} = req.body;
  const {endereco} = req.body;
  const {telefone} = req.body;
  const {produto} = req.body;
  const {valor} = req.body;
 
  con.query(`INSERT INTO pedidos (cliente, endereco, telefone, produto, valor) VALUES ('${cliente}', '${endereco}', '${telefone}', '${produto}', '${valor}')`, (err, result)=>{
    if(err){
      console.log(err)
    }else{
      console.log("Tudo certo")
    }
  })
})

app.get('/usuario', (req, res)=>{
  con.query("SELECT * FROM produtos", (err, result, fields)=>{
    res.send(result);
  })
})
app.listen(4000, ()=>{console.log("Tudo certo")})