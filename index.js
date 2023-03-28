const express  =require('express');

const app = express();

app.get('/teste', (req, res)=>{
    res.send('TESTE!!!');
});

app.listen(3000, ()=>{
    console.log('SERVIDOR HTTP RODANDO EM - http://localhost:3000');
});